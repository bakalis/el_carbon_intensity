import json
import hopsworks
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
import pandas as pd
from pathlib import Path
from xgboost import XGBRegressor
from xgboost import plot_importance
from sklearn.metrics import mean_squared_error, r2_score
from datetime import datetime
from helpers.config import HopsworksSettings
from helpers.transformations import model_dependent_transform

settings = HopsworksSettings(_env_file="./.env")
project = hopsworks.login(engine="python")
fs = project.get_feature_store()
mr = project.get_model_registry()

images_dir = Path("images")
images_dir.mkdir(parents=True, exist_ok=True)
model_dir = Path("models")
model_dir.mkdir(parents=True, exist_ok=True)

carbon_intensity_fg = fs.get_feature_group(
    name="carbon_intensity",
    version=1,
)
electricity_generation_fg = fs.get_feature_group(
    name="electricity_generation",
    version=1,
)
electricity_consumption_fg = fs.get_feature_group(
    name="electricity_consumption",
    version=1,
)
electricity_flow_fg = fs.get_feature_group(
    name="electricity_flow",
    version=1,
)
feature_view = fs.get_or_create_feature_view(
    name=f"carbon_intensity_fv",
    description="Energy data from entso-e with Carbon Intensity as target",
    version=1,
    labels=["ci_direct", "ci_lifecycle"],
    query=carbon_intensity_fg \
        .select(["datetime", "zone_id", "ci_direct", "ci_lifecycle"]) \
        .join(electricity_generation_fg.select_features(), on=["zone_id"]) \
        .join(electricity_consumption_fg.select_features(), on=["zone_id"]) \
        .join(electricity_flow_fg.select_features(), on=["zone_id"]),
)

test_start = datetime.strptime("2025-05-01", "%Y-%m-%d")
X_train, X_test, y_train, y_test = feature_view.train_test_split(
    test_start=test_start
)

zones = X_train["zone_id"].unique()

for zone in zones:
    Xz_train_full = X_train[X_train["zone_id"] == zone].drop(columns=["zone_id"])
    Xz_test_full = X_test[X_test["zone_id"] == zone].drop(columns=["zone_id"])

    yz_train_full = y_train.loc[Xz_train_full.index]
    yz_test_full = y_test.loc[Xz_test_full.index]

    selected_features = list(Xz_train_full.columns[(Xz_train_full != 0).any(axis=0)])

    Xz_train_t = model_dependent_transform(Xz_train_full, selected_features)
    Xz_test_t = model_dependent_transform(Xz_test_full, selected_features)

    dt_train = pd.to_datetime(Xz_train_t["datetime"])
    dt_test = pd.to_datetime(Xz_test_t["datetime"])

    Xz_train_t = Xz_train_t.drop(columns=["datetime"])
    Xz_test_t = Xz_test_t.drop(columns=["datetime"])

    for target in ["ci_direct", "ci_lifecycle"]:
        yz_train = yz_train_full[target]
        yz_test = yz_test_full[target]

        model = XGBRegressor(tree_method="hist", random_state=42)
        model.fit(Xz_train_t, yz_train)

        y_pred_train = model.predict(Xz_train_t)
        y_pred_test = model.predict(Xz_test_t)

        metrics = {
            "mse_train": mean_squared_error(yz_train, y_pred_train),
            "mse_test": mean_squared_error(yz_test, y_pred_test),
            "r2_train": r2_score(yz_train, y_pred_train),
            "r2_test": r2_score(yz_test, y_pred_test),
            "n_train": len(Xz_train_t),
            "n_test": len(Xz_test_t),
        }
        metadata = {
            "zone_id": zone,
            "target": target,
            "test_start": str(test_start),
            "selected_features": selected_features,
            "n_features": len(selected_features),
        }
        
        # Save and upload model
        model_path = model_dir / f"{zone}_{target}_model"
        model_path.mkdir(parents=True, exist_ok=True)
        model.get_booster().save_model(str(model_path / "model.json"))
        with open(model_path / "metadata.json", "w") as f:
            json.dump(metadata, f)

        hopsworks_model = mr.python.create_model(
            name=f"{target}_xgboost_{zone.replace('-', '_')}_model", 
            version=1,
            metrics=metrics,
            feature_view=feature_view,
            description=f"Carbon intensity predictor ({target}) for zone {zone}.",
        )
        hopsworks_model.save(model_path)

        # Plot hindcast (testing data)
        plt.figure(figsize=(14, 6))

        plt.plot(dt_train[:1000], yz_train[:1000], label="Actual (Train)", color="blue", alpha=0.6)
        plt.plot(dt_train[:1000], y_pred_train[:1000], label="Predicted (Train)", color="orange", linestyle="--")

        plt.title(f"{target.replace('_',' ').title()} – Actual vs Predicted ({zone})")
        plt.xlabel("Datetime")
        plt.gca().xaxis.set_major_locator(mdates.MonthLocator(interval=1))
        plt.ylabel(target)
        plt.legend()
        plt.tight_layout()

        path = images_dir / f"prediction_{target}_{zone}.png"
        plt.savefig(path)
        plt.close()

        # Plot feature importance
        plt.figure(figsize=(10, 8))

        plot_importance(model, max_num_features=15, show_values=False)

        plt.title(f"Feature Importance – Zone {zone}")
        plt.tight_layout()

        path = images_dir / f"feature_importance_{target}_{zone}.png"
        plt.savefig(path)
        plt.close()
