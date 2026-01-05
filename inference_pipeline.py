import requests
import hopsworks
import pandas as pd
from helpers.config import HopsworksSettings

settings = HopsworksSettings(_env_file="./.env")
project = hopsworks.login(engine="python")
fs = project.get_feature_store()
mr = project.get_model_registry()

# Electricity generation forecast
generation_df = pd.DataFrame()
for zone in settings.ZONES:
    response = requests.get(
        f"https://api.electricitymaps.com/v3/electricity-mix/forecast?zone={zone}&flowTraced=false&horizonHours=72&temporalGranularity=hourly",
        headers={"auth-token": settings.ELECTRICITY_MAPS_API_KEY.get_secret_value()},
    )
    zone_data = pd.json_normalize(response.json()["data"])
    zone_data["datetime"] = pd.to_datetime(zone_data["datetime"], utc=True)
    zone_data = zone_data.set_index("datetime")
    zone_data = zone_data.filter(like="mix.")
    zone_data.columns = zone_data.columns.str.replace("mix.", "", regex=False)
    zone_data = zone_data.rename(
        columns={
            "hydro discharge": "hydro_storage",
            "battery discharge": "battery_storage",
            "unknown": "other",
        }
    )
    zone_data = zone_data.reset_index(names="datetime")
    zone_data["zone_id"] = zone
    generation_df = pd.concat([generation_df, zone_data], ignore_index=True)
generation_df = generation_df.sort_values(by="datetime")

# Electricity consumption forecast
consumption_df = pd.DataFrame()
for zone in settings.ZONES:
    # Forecast for aggregated Sweden zone seems broken
    if zone == "SE":
        continue

    response = requests.get(
        f"https://api.electricitymaps.com/v3/total-reported-load/forecast?zone={zone}&horizonHours=72&temporalGranularity=hourly",
        headers={"auth-token": settings.ELECTRICITY_MAPS_API_KEY.get_secret_value()},
    )
    zone_data = pd.json_normalize(response.json()["data"])
    zone_data["datetime"] = pd.to_datetime(zone_data["datetime"], utc=True)
    zone_data = zone_data.filter(["datetime", "value"])
    zone_data = zone_data.rename(columns={"value": "load"})
    zone_data["zone_id"] = zone
    consumption_df = pd.concat([consumption_df, zone_data], ignore_index=True)

# Consumption forecast for aggregated Sweden zone seems broken, so added manually here
if "SE" in settings.ZONES:
    se_parts = consumption_df[
        consumption_df["zone_id"].isin(["SE-SE1", "SE-SE2", "SE-SE3", "SE-SE4"])
    ]
    se_agg = se_parts.groupby("datetime", as_index=False)["load"].sum()
    se_agg["zone_id"] = "SE"
    consumption_df = pd.concat([consumption_df, se_agg], ignore_index=True)
consumption_df = consumption_df.sort_values(by="datetime")

# Electricity flow forecast
flow_df = pd.DataFrame()
for zone in settings.ZONES:
    response = requests.get(
        f"https://api.electricitymaps.com/v3/electricity-flows/forecast?zone={zone}&horizonHours=72&temporalGranularity=hourly",
        headers={"auth-token": settings.ELECTRICITY_MAPS_API_KEY.get_secret_value()},
    )
    zone_data = pd.json_normalize(response.json()["data"])
    zone_data["datetime"] = pd.to_datetime(zone_data["datetime"], utc=True)
    import_cols = [c for c in zone_data.columns if c.startswith("import.")]
    export_cols = [c for c in zone_data.columns if c.startswith("export.")]
    zone_data["import"] = zone_data[import_cols].sum(axis=1, skipna=True)
    zone_data["export"] = zone_data[export_cols].sum(axis=1, skipna=True)
    zone_data = zone_data[["datetime", "import", "export"]]
    zone_data["zone_id"] = zone
    flow_df = pd.concat([flow_df, zone_data], ignore_index=True)
flow_df = flow_df.sort_values(by="datetime")

# Aggregate
forecast_df = generation_df.merge(
    consumption_df, on=["datetime", "zone_id"], how="inner"
).merge(flow_df, on=["datetime", "zone_id"], how="inner")
print(forecast_df.head(10))
print(forecast_df.tail(10))
