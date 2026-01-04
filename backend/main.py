import random
from datetime import datetime, timedelta
from typing import List

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from .model import CarbonIntensityPrediction, \
    load_models, to_model_input, \
    CarbonIntensityRequest, CarbonIntensityResponse
import hopsworks
from helpers.config import HopsworksSettings

models = None
settings = None
project = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    global models
    global settings
    global project
    settings = HopsworksSettings(_env_file="./.env")
    project = hopsworks.login(engine="python")
    models = load_models(project)
    print(f"Loaded models: {models.keys()}")
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
async def kaith_healthcheck():
    return {"status": "ok"}

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
