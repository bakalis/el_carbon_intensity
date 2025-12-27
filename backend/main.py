import random
from datetime import datetime, timedelta
from typing import List

from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from model import CarbonIntensityPrediction

app = FastAPI()
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
    return {"Hello": "World"}


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


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="localhost", port=8000)

