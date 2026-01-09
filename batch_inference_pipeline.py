import json
import requests
import hopsworks
import numpy as np
import pandas as pd
import xgboost as xgb
from helpers.config import HopsworksSettings
from helpers.utils import datetime_to_unix
from helpers.transformations import GENERATION_MAPPING, model_dependent_transform

settings = HopsworksSettings(_env_file="./.env")
project = hopsworks.login(engine="python")
fs = project.get_feature_store()
mr = project.get_model_registry()
now = pd.Timestamp.now(tz="UTC")

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
generation_cols = list(GENERATION_MAPPING.keys())
generation_df[generation_cols] = generation_df[generation_cols].fillna(0.0)
generation_df["total"] = generation_df[generation_cols].sum(axis=1)
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
int_cols = forecast_df.select_dtypes(include="int").columns
forecast_df[int_cols] = forecast_df[int_cols].astype(float)

# Prediction
prediction_df = pd.DataFrame()
for zone in settings.ZONES:
    zone_data = forecast_df[forecast_df["zone_id"] == zone]
    zone_prediction = pd.DataFrame()
    zone_prediction["datetime"] = zone_data["datetime"]
    zone_prediction["zone_id"] = zone
    for target in ["ci_direct", "ci_lifecycle"]:
        model_dir = mr.get_model(
            name=f"{target}_xgboost_{zone.replace('-', '_')}_model",
            version=1,
        ).download()
        model = xgb.Booster()
        model.load_model(model_dir + "/model.json")
        with open(model_dir + "/metadata.json", "r", encoding="utf-8") as f:
            metadata = json.load(f)

        zone_data_transformed = model_dependent_transform(
            zone_data, selected_features=metadata["selected_features"]
        ).drop(columns=["datetime"])
        column_name = target + "_prediction"
        zone_prediction[column_name] = model.predict(xgb.DMatrix(zone_data_transformed))
    prediction_df = pd.concat([prediction_df, zone_prediction], ignore_index=True)
prediction_df = forecast_df.merge(
    prediction_df, on=["datetime", "zone_id"], how="inner"
)
prediction_df["hours_before_forecast"] = np.ceil(
    (prediction_df["datetime"] - now).dt.total_seconds() / 3600
).astype(int)
prediction_df = prediction_df[prediction_df["hours_before_forecast"] > 0]
prediction_df["datetime_id"] = prediction_df["datetime"].map(datetime_to_unix).astype("int64")
predictions_fg = fs.get_or_create_feature_group(
    name="ci_predictions_xgboost",
    description="Carbon intensity prediction monitoring",
    version=2,
    primary_key=["zone_id", "datetime_id", "hours_before_forecast"],
    event_time="datetime",
    online_enabled=True
)
predictions_fg.insert(prediction_df, wait=True)
