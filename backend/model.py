from datetime import datetime
from typing import Optional

import numpy as np
import pandas as pd
from pydantic import BaseModel
from xgboost import XGBRegressor
import json

from helpers.transformations import model_dependent_transform

class FeatureModel(BaseModel):
    name: str
    min: int
    max: int
    median: int

class CarbonIntensityPrediction(BaseModel):
    date_time: str
    zone_id: str
    predicted_intensity: Optional[float]
    actual_intensity: float | None = None
    hours_before_forecast: Optional[int] = None


class CarbonIntensityRequest(BaseModel):
    zone_id: str  # required

    date_time: Optional[datetime] = None
    output_type: Optional[str] = "lifecycle"  # "lifecycle" or "direct"

    gas: Optional[float] = None
    solar: Optional[float] = None
    hydro: Optional[float] = None
    wind: Optional[float] = None
    nuclear: Optional[float] = None
    other: Optional[float] = None

    total: Optional[float] = None
    load: Optional[float] = None
    import_: Optional[float] = None
    export: Optional[float] = None

    class Config:
        populate_by_name = True
        fields = {
            "import_": "import",
            "export": "export",
        }


class CarbonIntensityResponse(BaseModel):
    carbon_intensity: float
    unit: str = "gCO2eq/kWh"


def load_models(project, zones):
    mr = project.get_model_registry()
    model_output_types = ["lifecycle", "direct"]
    model_dirs = {}
    models = {}
    raw_features: dict[str, list[FeatureModel]] = {}
    feature_order: dict[str, list[str]] = {}
    
    for zone in zones:
        for output_type in model_output_types:
            zone_id = zone.replace("-", "_")
            model_name = f"ci_{output_type}_xgboost_{zone_id}_model"
            model = mr.get_model(name=model_name, version=2)
            model_dir = model.download()
            model_dirs[(zone, output_type)] = model_dir
            models[(zone, output_type)] = XGBRegressor()
            models[(zone, output_type)].load_model(
                model_dir + "/model.json"
            )
            
            if zone not in raw_features:
                with open(model_dir + "/metadata.json", "r") as f:
                    metadata = json.load(f)
                    features = []
                    for feature_name, feature_stats in metadata["selected_features"].items():
                        features.append(FeatureModel(
                            name=feature_name,
                            min=int(feature_stats["min"]),
                            max=int(feature_stats["max"]),
                            median=int(feature_stats["median"])
                        ))
                    raw_features[zone] = features
                
                with open(model_dir + "/model.json", "r") as f:
                    model_json = json.load(f)
                    feature_names = model_json["learner"]["feature_names"]
                    feature_order[zone] = feature_names
    
    return models, raw_features, feature_order

def get_raw_features(raw_features: dict[str, list[FeatureModel]]) -> dict[str, list[str]]:
    return {zone: [feature.name for feature in features] for zone, features in raw_features.items()}

def to_model_input(zone: str, req: CarbonIntensityRequest, raw_features: dict, feature_order: dict) -> np.ndarray:
    df = pd.DataFrame(
        [
            {
                "datetime": req.date_time,
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
            }
        ]
    )

    Xt = model_dependent_transform(
        X=df,
        selected_features=get_raw_features(raw_features)[zone] + ["datetime"],
    )
    Xt = Xt.drop(columns=["datetime"], errors="ignore")
    Xt = Xt[feature_order[zone]]
    return Xt.to_numpy(dtype=np.float32)
