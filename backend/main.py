import random
from datetime import datetime, timedelta
from typing import List
import asyncio
import os
import logging
import httpx

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from .model import CarbonIntensityPrediction, \
    load_models, to_model_input, \
    CarbonIntensityRequest, CarbonIntensityResponse
import hopsworks
from dotenv import load_dotenv

load_dotenv()
models = None
models_ready = False
settings = None
project = None
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def _login_blocking():
    return hopsworks.login(
        host=os.getenv("HOPSWORKS_HOST"),
        project=os.getenv("HOPSWORKS_PROJECT"),
        api_key_value=os.getenv("HOPSWORKS_API_KEY"),
    )

async def try_login_with_timeout(seconds: float = 5.0):
    loop = asyncio.get_running_loop()
    logger.info("Hopsworks login: starting (with timeout)")
    try:
        project = await asyncio.wait_for(
            loop.run_in_executor(None, _login_blocking),
            timeout=seconds,
        )
        logger.info("Hopsworks login: success")
        return project
    except asyncio.TimeoutError:
        logger.error(f"Hopsworks login: timed out after {seconds}s")
        return None

def load_models_sync():
    global models, project, models_ready
    try:
        # run sync wrapper of the async timeout
        project = asyncio.run(try_login_with_timeout(5.0))
        if project is None:
            models_ready = False
            return
        models = load_models(project)
        models_ready = True
    except Exception:
        logging.exception("load_models_sync failed")
        models_ready = False

async def load_models_bg():
    loop = asyncio.get_running_loop()
    await loop.run_in_executor(None, load_models_sync)

async def check_hopsworks_connectivity():
    url = f"https://{os.getenv('HOPSWORKS_HOST')}/api/v2/projects"
    headers = {"x-api-key": os.getenv("HOPSWORKS_API_KEY")}

    async with httpx.AsyncClient(timeout=5.0) as client:
        r = await client.get(url, headers=headers)
        return r.status_code, r.text[:200]
    
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

@app.get("/kaithhealthcheck")
async def health():
    return {"status": "ok"}

@app.get("/kaithheathcheck")
async def heath():
    return {"status": "ok"}

@app.get("/readiness")
async def readiness():
    return {"ready": models_ready}

@app.get("/debug/hopsworks")
async def debug_hopsworks():
    code, body = await check_hopsworks_connectivity()
    return {"status_code": code, "body_snippet": body}

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
