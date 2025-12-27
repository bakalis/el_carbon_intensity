import hopsworks
import requests
import time
from helpers.config import HopsworksSettings
import pandas as pd


settings = HopsworksSettings(_env_file="./.env")
project = hopsworks.login(engine="python")
fs = project.get_feature_store() 

carbon_intensity_fg = fs.get_feature_group(
    name="carbon_intensity",
    version=1,
)

def create_emission_df(data):
    # Convert list of ci dict entries to DataFrame
    df = pd.DataFrame(data)
    df = df[df['emissionFactorType'].isin(['lifecycle', 'direct'])]
    
    # Pivot so emissionFactorType values become columns, indexed by datetime and zone
    # Data estimated column is true if it is true for at least one emission factor type
    pivot = (
        df.pivot_table(
            index=['datetime', 'zone'],
            columns='emissionFactorType',
            values='carbonIntensity',
            aggfunc='max'
        )
        .join(df.groupby(['datetime', 'zone'])['isEstimated'].any())
        .reset_index()
    )
    
    # Drop rows missing either 'lifecycle' or 'direct'
    pivot = pivot.dropna(subset=['lifecycle', 'direct'])

    pivot[["direct", "lifecycle"]] = pivot[["direct", "lifecycle"]].astype("float64")
    
    # Rename and reformat columns
    pivot.rename(columns={
        'zone': 'zone_id',
        'direct': 'ci_direct',
        'lifecycle': 'ci_lifecycle',
        'isEstimated': 'data_estimated',
    }, inplace=True)
    
    # Ensure datetime column is parsed as datetime
    pivot['datetime'] = pd.to_datetime(pivot['datetime']).dt.tz_localize(None)

    
    return pivot

# Add new carbon intensity data
df = pd.DataFrame()
for zone in settings.ZONES:
    zone_data = []
    for emission_factor_type in ["lifecycle", "direct"]:
        response = requests.get(
            f"https://api.electricitymaps.com/v3/carbon-intensity/history?zone={zone}&temporalGranularity=hourly&emissionFactorType={emission_factor_type}",
            headers={
                "auth-token": settings.ELECTRICITY_MAPS_API_KEY.get_secret_value()
            }
        )
        zone_data.extend(response.json()["history"])
        time.sleep(0.1)        
    df = pd.concat([df, create_emission_df(zone_data)], ignore_index=True)
    df = df.sort_values(by='datetime')

carbon_intensity_fg.insert(df, wait=True)