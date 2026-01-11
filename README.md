# Carbon Intensity Forecasting

A full-stack project for **forecasting Sweden's electricity carbon intensity** and visualizing it in a web application. It combines:

- **Data & ML pipelines** for feature engineering, training, and inference.
    
- A **backend API** for serving actuals and forecasts.
    
- A **web frontend** for interactive exploration on a map and in time series.

---

## URLs

Web App - 	<https://bakalis.github.io/el_carbon_intensity/> <br>
API Docs -	 <https://bakalis-el-carbon-intensity-backend.hf.space/docs> <br>
HuggingFace Space - <https://huggingface.co/spaces/bakalis/el_carbon_intensity_backend>

---

## Features

- Forecasts **carbon intensity** per zone and hour (direct and lifecycle).
    
- Stores features and predictions in a **feature store** for training and serving.
    
- **FastAPI** backend exposing REST endpoints.
    
- Web UI (React / Clojurescript) with:
    
    - Map view with color scale by intensity.
        
    - Time series and per-zone details.
        
    - Controls for date, hour, zone, and intensity type

    - Playground for making real-time predictions based on arbitrary values
        

---

## Architecture

**High-level components:**

- **Pipelines**
    
    - Feature backfill & feature pipeline
        
    - Training and evaluation pipeline
        
    - Batch inference pipeline
    
    - Run using Github Actions
        
- **Hopsworks Feature Store**
    
    - Feature groups for:
        
        - Electricity Generation features
        
		- Electricity Imports and Exports
        
        - Electricity Consumption features
            
        - Carbon intensity actual values (using Online Feature Group)
            
        - Carbon intensity predictions (using Online Feature Group)
            
- **Backend (API)**
    
    - FastAPI service that:
        
        - Loads all the different models from Hopsworks
    
        - Reads features/predictions from the feature store
            
        - Exposes APIs for service actual and prediction values as well as a live prediction endpoint
        
        - Hosted on HuggingFace spaces
            
- **Frontend (Webapp)**
    
    - Calls the API to display:
        
        - Map overlays of intensity
            
        - Historical vs forecasted values hindcast for selected zones
    
        - Playground for real-time predictions
        
        - Hosted on Github pages
            
---

## Data & ML Pipelines

To be able to run the workflows locally (after cloning the repository), the relevant packages can be installed like this:

```bash
uv venv --python 3.11
uv sync --frozen
```

For it to work, create a .env file from the .env-prototype with the HOPSWORKS_*, ZONES properties, as well as API keys for both Entso-E and Electricity-Maps.


## 1. Ingestion & Feature Engineering

- Backfill pipelines insert scraped electricity data ([Entso-E](https://transparency.entsoe.eu)) and carbon intensity data ([Electricity-Maps](https://app.electricitymaps.com)) into Hopsworks feature store
    
- Separate feature pipeline runs periodically (every hour) with Github Actions to pull and insert current values

- Derives per-zone features, such as:
    
    - Generation mix per technology
        
    - Imports/exports
        
    - Electricity consumption/Load
        
Usage:

`uv run python feature_pipeline.py`
## 2. Model Training

- Reads historical features and labels from the **offline** store
    
- Trains regression models XGBoost for:
    
    - Direct carbon intensity
        
    - Lifecycle carbon intensity
        
- Logs metrics and persists trained models
    
Usage:

`uv run python training_pipeline.py`


## 3. Batch Inference

- Runs every hour via Github Actions
    
- Loads the trained model(s) and electricity forecasts for up to 72 hours

- Predicts direct and lifecycle carbon intensity for that timeframe
    
- Writes predictions into a **predictions feature group** with keys like:
    
    - `datetime_id`, `zone_id`, `hours_before_forecast`.

Usage:

`uv run python batch_inference_pipeline.py`

---

## Backend API

Backend is implemented with **FastAPI** and exposes endpoints such as:

- `GET /raw-features`

    - Returns the features that are supported for each zone's models
        
- `POST /predict`
    
    - Retrieves a set of input features from the UI and returns a prediction using the appropriate model
        
- `GET /refresh`
    
    - Forces the application to retrieve the latest feature views
        
- `GET /day-all-carbon-intensities`
    
    - Returns carbon intensities for all zones for a request date
        
- `GET /all-carbon-intensities`
    
    - Returns carbon intensities for all zones for the current day
        
    
Run locally (example):

- Clone the repository
- Create a .env file from the .env-prototype with the HOPSWORKS_* and ZONES properties

```bash
python -m venv .venv
source .venv/bin/activate
python -m ensurepip --upgrade
pip install -r requirements.txt
python -m backend.main
```
 
 OpenAPI spec is located in `http://localhost:7860/docs`
 
---

## Web Application

The frontend visualizes carbon intensity data from the API.

**Key UI pieces:**

- **Map view**
    
    - Zone polygons colored by intensity using a discrete scale.
    
    - Toggle between whole Sweden and the 4 electricity Swedish zones
        
    - Toggle between **direct** and **lifecycle** intensity.
    
    - Hover tooltips with exact values.
        
- **Hindcast Tab**
    
    - Plot of actual vs predicted values over the selected day
        
    - View predictions made a specific amount of hours before, using a slider
        
- **Playground Tab**
    
    - Median values for each input preloaded
        
    - Choose your own values for a prediction
            

Run locally (example):

bash

```bash
cd view
npm install
npm run dev
```

Then open the printed URL (default `http://localhost:8080`).

---

## Configuration

 All needed configuration values are located in the .env-prototype file. Fill in your own.      

---

## Cleanup

  There is a GitHub action called cleanup-feature-views that is run every 6 hours, deleting all the old versions of our live feature views

---
