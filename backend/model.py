from pydantic import BaseModel

class CarbonIntensityPrediction(BaseModel):
    datetime: str
    zone_name: str
    predicted_intensity: float
    actual_intensity: float | None = None
