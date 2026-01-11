import asyncio
import logging
import os
import time
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from contextlib import asynccontextmanager
from datetime import datetime, timedelta, timezone
from typing import List

import hopsworks
import pandas as pd
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware

from .model import (
    CarbonIntensityPrediction,
    CarbonIntensityRequest,
    CarbonIntensityResponse,
    load_models,
    to_model_input,
)

load_dotenv()
fs = None
ci_fv = None
cp_fv = None
models = None
raw_features = None
feature_order = None
models_ready = False
settings = None
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
scheduler = AsyncIOScheduler()

async def load_latest_feature_views():
    global ci_fv, cp_fv, fs
    logger.info("Loading latest feature views...")
    all_ci_versions = fs.get_feature_views(name="ci_actuals_fv")
    latest_ci_fv = sorted(all_ci_versions, key=lambda fv: fv.version)[-1]
    ci_fv = latest_ci_fv
    ci_fv.init_serving(training_dataset_version=ci_fv.version)
    all_cp_versions = fs.get_feature_views(name="ci_predictions_fv")
    latest_cp_fv = sorted(all_cp_versions, key=lambda fv: fv.version)[-1]
    cp_fv = latest_cp_fv
    cp_fv.init_serving(training_dataset_version=cp_fv.version)
    logger.info(f"Loaded latest feature views: ci_actuals_fv v{ci_fv.version}, ci_predictions_fv v{cp_fv.version}")

def _login_blocking():
    return hopsworks.login(
        host=os.getenv("HOPSWORKS_HOST"),
        project=os.getenv("HOPSWORKS_PROJECT"),
        api_key_value=os.getenv("HOPSWORKS_API_KEY"),
    )


async def try_login_with_timeout(seconds: float = 5.0):
    global ci_fv, cp_fv, fs
    loop = asyncio.get_running_loop()
    logger.info("Hopsworks login: starting (with timeout)")
    try:
        project = await asyncio.wait_for(
            loop.run_in_executor(None, _login_blocking),
            timeout=seconds,
        )
        logger.info("Hopsworks login: success")
        fs = project.get_feature_store()
        await load_latest_feature_views()
        return project
    except asyncio.TimeoutError:
        logger.error(f"Hopsworks login: timed out after {seconds}s")
        return None

def load_models_sync():
    global models, models_ready, raw_features, feature_order
    try:
        # run sync wrapper of the async timeout
        project = asyncio.run(try_login_with_timeout(30.0))
        if project is None:
            models_ready = False
            return
        models, raw_features, feature_order = load_models(project, os.environ.get("ZONES", "").split(","))
        models_ready = True
    except Exception:
        logging.exception("load_models_sync failed")
        models_ready = False


def hourly_unix_utc(day_str: str) -> List[int]:
    """
    Given 'YYYY-MM-DD', return Unix timestamps (seconds) for each hour
    of that day in UTC.
    """
    day = datetime.strptime(day_str, "%Y-%m-%d").replace(tzinfo=timezone.utc)
    return [int((day + timedelta(hours=h)).timestamp()) for h in range(24)]


async def load_models_bg():
    loop = asyncio.get_running_loop()
    scheduler.add_job(load_latest_feature_views, "interval", minutes=45)
    scheduler.start()
    await loop.run_in_executor(None, load_models_sync)


@asynccontextmanager
async def lifespan(app: FastAPI):
    asyncio.create_task(load_models_bg())
    yield
    print("Shutting down application")


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://bakalis.github.io",
        "http://localhost:8080",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return "Welcome to the Carbon Intensity Prediction API"


@app.get("/refresh")
async def refresh():
    asyncio.create_task(load_latest_feature_views())
    return "Refresh triggered"

@app.get("/readiness")
async def readiness():
    return {"ready": models_ready}


@app.get(
    "/all-carbon-intensities", response_model=dict[str, dict[str, List[CarbonIntensityPrediction]]]
)
def all_get_carbon_intensity_predictions():
    today = datetime.today().strftime("%Y-%m-%d")
    return day_all_get_carbon_intensity_predictions(request_date=today)


@app.get(
    "/day-all-carbon-intensities",
    response_model=dict[str, dict[str, List[CarbonIntensityPrediction]]],
)
def day_all_get_carbon_intensity_predictions(
    request_date: str = Query(..., description="Reference date in YYYY-MM-DD format"),
):
    request_date_dt = datetime.strptime(request_date, "%Y-%m-%d")
    today = datetime.today().replace(hour=0, minute=0, second=0, microsecond=0)
    if request_date_dt < (today - timedelta(days=7)) or request_date_dt > (today + timedelta(days=2)):
        raise HTTPException(
            status_code=400,
            detail="Requested date is out of the allowed range (7 days in the past or 2 days in the future from today)",
        )
    
    global ci_fv, cp_fv
    start = time.perf_counter()
    timestamps = hourly_unix_utc(request_date)
    zone_ids = ["SE", "SE-SE1", "SE-SE2", "SE-SE3", "SE-SE4"]
    ci_types = ["lifecycle", "direct"]
    entries = [{"datetime_id": ts, "zone_id": z} for ts in timestamps for z in zone_ids]

    entries_pred = [
        {"datetime_id": ts, "zone_id": z, "hours_before_forecast": h}
        for ts in timestamps
        for z in zone_ids
        for h in range(1, 25)
    ]
    start = time.perf_counter()

    actuals_df = ci_fv.get_feature_vectors(entries, return_type="pandas", allow_missing=True)
    actuals_df = actuals_df.dropna(subset=["datetime"])
    preds_raw_df = cp_fv.get_feature_vectors(entries_pred, return_type="pandas", allow_missing=True)
    preds_raw_df = preds_raw_df.dropna(subset=["datetime"])
    preds_raw_df = preds_raw_df.sort_values(['datetime', 'hours_before_forecast'])

    end = time.perf_counter()
    print(f"Queries execution time: {end - start:.6f} seconds")

    start = time.perf_counter()
    merged_df = preds_raw_df.merge(actuals_df, on=["zone_id", "datetime_id"], how="outer")

    # Sort once for groupby efficiency
    merged_df = merged_df.sort_values(["zone_id", "datetime_id"])

    # Build results efficiently using groupby
    all_predictions = {}
    for zone_id, group_df in merged_df.groupby("zone_id", sort=False):
        all_predictions[zone_id] = {}
        for ci_type in ci_types:
            all_predictions[zone_id][ci_type] = [
                CarbonIntensityPrediction(
                    date_time=datetime.fromtimestamp(row['datetime_id']).isoformat(),
                    zone_id=row["zone_id"],
                    predicted_intensity=None
                    if pd.isna(row[f"ci_{ci_type}_prediction"])
                    else float(row[f"ci_{ci_type}_prediction"]),
                    actual_intensity=None
                    if pd.isna(row[f"ci_{ci_type}"])
                    else float(row[f"ci_{ci_type}"]),
                    hours_before_forecast=1
                    if pd.isna(row["hours_before_forecast"])
                    else int(row["hours_before_forecast"])
                )
                for _, row in group_df.iterrows()
            ]

    end = time.perf_counter()
    print(f"Creating predictions time: {end - start:.6f} seconds")
    return all_predictions

@app.post("/predict", response_model=CarbonIntensityResponse)
def predict_carbon_intensity(req: CarbonIntensityRequest):
    global models, models_ready, raw_features, feature_order

    if not models_ready:
        raise HTTPException(status_code=503, detail="Models still loading")

    zone_id = req.zone_id
    output_type = req.output_type if req.output_type else "ci_lifecycle"
    model = models.get((zone_id, output_type))
    if model is None:
        raise HTTPException(
            status_code=500,
            detail="Could not find model for the specified zone and output type",
        )

    X = to_model_input(zone_id, req, raw_features, feature_order)

    prediction = model.predict(X)

    return CarbonIntensityResponse(carbon_intensity=float(prediction[0]))


@app.get("/raw-features")
def get_raw_features_endpoint():
    global raw_features
    return raw_features


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="localhost", port=7860)
