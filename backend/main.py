import random
from datetime import datetime, timedelta
from typing import List
import asyncio
import os
import logging

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from .model import CarbonIntensityPrediction, \
    load_models, to_model_input, \
    CarbonIntensityRequest, CarbonIntensityResponse
import hopsworks
from dotenv import load_dotenv
from helpers.config import HopsworksSettings

load_dotenv()
models = None
models_ready = False
settings = None
project = None
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def load_models_sync():
    global models, project, models_ready
    try:
        logger.info("load_models_sync: starting")

        project = hopsworks.login(
            host=os.environ["HOPSWORKS_HOST"],
            project=os.environ["HOPSWORKS_PROJECT"],
            api_key_value=os.environ["HOPSWORKS_API_KEY"],
            engine=None
        )
        logger.info("load_models_sync: logged into Hopsworks")

        models = load_models(project)
        logger.info(f"load_models_sync: loaded models {list(models.keys())}")
        models_ready = True
    except Exception:
        logger.exception("load_models_sync: FAILED")
        models_ready = False

async def load_models_bg():
    loop = asyncio.get_running_loop()
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
    model = models[('SE', 'ci_lifecycle')]
    print(f"Using model: {model}")
    return {"message": "Welcome to the Carbon Intensity Prediction API"}

@app.get("/kaithheathcheck")
async def health():
    return {"status": "ok"}

@app.get("/readiness")
async def readiness():
    return {"ready": models_ready}

@app.get("/carbon-intensity", response_model=List[CarbonIntensityPrediction])
def get_carbon_intensity_predictions(
    request_date: str = Query(..., description="Reference date in YYYY-MM-DD format"),
    zone_name: str = Query("SE", description="Electricity zone name"),
):
    base_date = datetime.strptime(request_date, "%Y-%m-%d")

    today = datetime.today()

    start = base_date - timedelta(days=7)
    end = base_date + timedelta(days=7)

    predictions: list[CarbonIntensityPrediction] = []

    current = start
    while current <= end:
        include_actuals = current <= today
        for hour in range(24):
            timestamp = current.replace(hour=hour, minute=0, second=0)

            predicted = round(random.uniform(50, 500), 2)

            actual = (
                round(predicted + random.uniform(-30, 30), 2)
                if include_actuals
                else None
            )

            predictions.append(
                CarbonIntensityPrediction(
                    datetime=timestamp.isoformat(),
                    zone_name=zone_name,
                    predicted_intensity=predicted,
                    actual_intensity=actual,
                )
            )

        current += timedelta(days=1)

    return predictions

@app.post("/predict", response_model=CarbonIntensityResponse)
def predict_carbon_intensity(req: CarbonIntensityRequest):
    global models, models_ready
    
    if not models_ready:
        raise HTTPException(status_code=503, detail="Models still loading")

    zone_id = req.zone_id
    output_type = req.output_type if req.output_type else 'ci_lifecycle'
    model = models.get((zone_id, output_type))
    if model is None:
        raise HTTPException(status_code=500, detail="Could not find model for the specified zone and output type")

    X = to_model_input(zone_id, req)

    prediction = model.predict(X)

    return CarbonIntensityResponse(
        carbon_intensity=float(prediction[0])
    )

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="localhost", port=8000)
