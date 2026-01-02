import hopsworks
import requests
import time
import pandas as pd
from datetime import datetime, timezone, timedelta
from helpers.config import HopsworksSettings
from helpers.utils import em_zone_to_entsoe_zone
from helpers.transformations import entsoe_generation_transform

from entsoe.mappings import NEIGHBOURS
# Aggregated zones are missing in the library, so this is added manually
NEIGHBOURS["SE"] = ["NO", "DK", "DE_LU", "FI", "LT", "PL"]
from entsoe import EntsoePandasClient

settings = HopsworksSettings(_env_file="./.env")
project = hopsworks.login(engine="python")
fs = project.get_feature_store()
entsoe_client = EntsoePandasClient(
    api_key=settings.TRANSPARENCY_PLATFORM_API_KEY.get_secret_value()
)

def create_emission_df(data):
    # Convert list of ci dict entries to DataFrame
    df = pd.DataFrame(data)
    df = df[df["emissionFactorType"].isin(["lifecycle", "direct"])]

    # Pivot so emissionFactorType values become columns, indexed by datetime and zone
    # Data estimated column is true if it is true for at least one emission factor type
    pivot = (
        df.pivot_table(
            index=["datetime", "zone"],
            columns="emissionFactorType",
            values="carbonIntensity",
            aggfunc="max",
        )
        .join(df.groupby(["datetime", "zone"])["isEstimated"].any())
        .reset_index()
    )

    # Drop rows missing either 'lifecycle' or 'direct'
    pivot = pivot.dropna(subset=["lifecycle", "direct"])

    pivot[["direct", "lifecycle"]] = pivot[["direct", "lifecycle"]].astype("float64")

    # Rename and reformat columns
    pivot.rename(
        columns={
            "zone": "zone_id",
            "direct": "ci_direct",
            "lifecycle": "ci_lifecycle",
            "isEstimated": "data_estimated",
        },
        inplace=True,
    )

    # Ensure datetime column is parsed as datetime
    pivot["datetime"] = pd.to_datetime(pivot["datetime"]).dt.tz_localize(None)

    return pivot


# Add new carbon intensity data
carbon_intensity_fg = fs.get_feature_group(
    name="carbon_intensity",
    version=1,
)

df = pd.DataFrame()
for zone in settings.ZONES:
    zone_data = []
    for emission_factor_type in ["lifecycle", "direct"]:
        response = requests.get(
            f"https://api.electricitymaps.com/v3/carbon-intensity/history?zone={zone}&temporalGranularity=hourly&emissionFactorType={emission_factor_type}",
            headers={
                "auth-token": settings.ELECTRICITY_MAPS_API_KEY.get_secret_value()
            },
        )
        zone_data.extend(response.json()["history"])
        time.sleep(0.1)
    df = pd.concat([df, create_emission_df(zone_data)], ignore_index=True)
df = df.sort_values(by="datetime")
carbon_intensity_fg.insert(df, wait=True)

# Add new electricity generation data
electricity_generation_fg = fs.get_feature_group(
    name="electricity_generation",
    version=1,
)
df = pd.DataFrame()
for zone in settings.ZONES:
    entsoe_zone = em_zone_to_entsoe_zone(zone)
    now = datetime.now(timezone.utc)
    previous_day = now - timedelta(days=1)
    start = pd.to_datetime(previous_day, utc=True)
    end = pd.to_datetime(now, utc=True)
    zone_data = entsoe_client.query_generation(country_code=entsoe_zone, start=start, end=end)
    zone_data.index = zone_data.index.tz_convert("UTC").tz_localize(None)
    zone_data = zone_data.reset_index(names="datetime (utc)")
    zone_data["Zone id"] = zone
    zone_data = entsoe_generation_transform(zone_data)
    df = pd.concat([df, zone_data], ignore_index=True)
df = df.sort_values(by="datetime")
electricity_generation_fg.insert(df, wait=True)

# Add new electricity consumption data
electricity_consumption_fg = fs.get_feature_group(
    name="electricity_consumption",
    version=1,
)
df = pd.DataFrame()
for zone in settings.ZONES:
    entsoe_zone = em_zone_to_entsoe_zone(zone)
    now = datetime.now(timezone.utc)
    previous_day = now - timedelta(days=1)
    start = pd.to_datetime(previous_day, utc=True)
    end = pd.to_datetime(now, utc=True)
    zone_data = entsoe_client.query_load(country_code=entsoe_zone, start=start, end=end)
    zone_data.index = zone_data.index.tz_convert("UTC").tz_localize(None)
    zone_data = zone_data.reset_index(names="datetime")
    zone_data["zone_id"] = zone
    zone_data = zone_data.rename(columns={"Actual Load": "load"})
    df = pd.concat([df, zone_data], ignore_index=True)
df = df.sort_values(by="datetime")
electricity_consumption_fg.insert(df, wait=True)

# Add new electricity flow data
electricity_flow_fg = fs.get_feature_group(
    name="electricity_flow",
    version=1,
)
df = pd.DataFrame()
for zone in settings.ZONES:
    entsoe_zone = em_zone_to_entsoe_zone(zone)
    now = datetime.now(timezone.utc)
    previous_day = now - timedelta(days=1)
    start = pd.to_datetime(previous_day, utc=True)
    end = pd.to_datetime(now, utc=True)
    zone_import = entsoe_client.query_physical_crossborder_allborders(country_code=entsoe_zone, start=start, end=end, export=False, per_hour=True)["sum"]
    zone_export = entsoe_client.query_physical_crossborder_allborders(country_code=entsoe_zone, start=start, end=end, export=True, per_hour=True)["sum"]
    zone_data = pd.concat([zone_import, zone_export], axis=1, keys=["import", "export"])
    zone_data.index = zone_data.index.tz_convert("UTC").tz_localize(None)
    zone_data = zone_data.reset_index(names="datetime")
    zone_data["zone_id"] = zone
    df = pd.concat([df, zone_data], ignore_index=True)
df = df.sort_values(by="datetime")
electricity_flow_fg.insert(df, wait=True)