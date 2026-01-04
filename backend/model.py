from pydantic import BaseModel
from xgboost import XGBRegressor
from datetime import datetime
from helpers.transformations import model_dependent_transform
import numpy as np
import pandas as pd

class CarbonIntensityPrediction(BaseModel):
    datetime: str
    zone_name: str
    predicted_intensity: float
    actual_intensity: float | None = None

class CarbonIntensityRequest(BaseModel):
    datetime: datetime
    zone_id: str
    output_type: str | None = "ci_lifecycle"  # "ci_lifecycle" or "ci_direct"

    gas: float
    solar: float
    hydro: float
    wind: float
    nuclear: float
    other: float

    total: float
    load: float
    import_: float
    export: float

    class Config:
        populate_by_name = True
        fields = {
            "import_": "import",
            "export": "export",
        }


class CarbonIntensityResponse(BaseModel):
    carbon_intensity: float
    unit: str = "gCO2eq/kWh"

def load_models(project):
    mr = project.get_model_registry()
    model_zones = ['SE', 'SE_SE1', 'SE_SE2', 'SE_SE3', 'SE_SE4']
    model_output_types = ['ci_lifecycle', 'ci_direct']
    model_dirs = {}
    models = {}

    for zone in model_zones:
        for output_type in model_output_types:
            model_name = f"{output_type}_xgboost_{zone}_model"
            model = mr.get_model(
                name=model_name,
                version=1
            )

            model_dirs[(zone, output_type)] = model.download()
            models[(zone, output_type)] = XGBRegressor()
            models[(zone, output_type)].load_model(model_dirs[(zone, output_type)] + "/model.json")

    return models

RAW_FEATURES = {
    "SE": [
        "gas", "solar", "hydro", "wind", "nuclear", "other",
        "total", "load", "import", "export"
    ],
    "SE_SE1": [
        "solar", "hydro", "wind", "other",
        "total", "load", "import", "export"
    ],
    "SE_SE2": [
        "gas", "solar", "hydro", "wind", "other",
        "total", "load", "import", "export"
    ],
    "SE_SE3": [
        "gas", "solar", "hydro", "wind", "nuclear", "other",
        "total", "load", "import", "export"
    ],
    "SE_SE4": [
        "gas", "solar", "hydro", "wind", "other",
        "total", "load", "import", "export"
    ],
}

FEATURE_ORDER = {
    "SE": [
        "gas_portion",
        "solar_portion",
        "hydro_portion",
        "wind_portion",
        "nuclear_portion",
        "other_portion",
        "import_portion",
        "available_total",
        "load_portion",
        "export_portion",
        "used_total"
    ],
    "SE_SE1": [
        "solar_portion",
        "hydro_portion",
        "wind_portion",
        "other_portion",
        "import_portion",
        "available_total",
        "load_portion",
        "export_portion",
        "used_total"
    ],
    "SE_SE2": [
        "gas_portion",
        "solar_portion",
        "hydro_portion",
        "wind_portion",
        "other_portion",
        "import_portion",
        "available_total",
        "load_portion",
        "export_portion",
        "used_total"
    ],
    "SE_SE3": [
        "gas_portion",
        "solar_portion",
        "hydro_portion",
        "wind_portion",
        "nuclear_portion",
        "other_portion",
        "import_portion",
        "available_total",
        "load_portion",
        "export_portion",
        "used_total"
    ],
    "SE_SE4": [
        "gas_portion",
        "solar_portion",
        "hydro_portion",
        "wind_portion",
        "other_portion",
        "import_portion",
        "available_total",
        "load_portion",
        "export_portion",
        "used_total"
    ]
}

def to_model_input(zone: str, req: CarbonIntensityRequest) -> np.ndarray:
    df = pd.DataFrame([{
        "datetime": req.datetime,
        "gas": req.gas,
        "solar": req.solar,
        "hydro": req.hydro,
        "wind": req.wind,
        "nuclear": req.nuclear,
        "other": req.other,
        "total": req.total,
        "load": req.load,
        "import": req.import_,
        "export": req.export,
    }])

    Xt = model_dependent_transform(
        X=df,
        selected_features=RAW_FEATURES[zone] + ["datetime"],
    )
    Xt = Xt.drop(columns=["datetime"], errors="ignore")
    Xt = Xt[FEATURE_ORDER[zone]]
    return Xt.to_numpy(dtype=np.float32)