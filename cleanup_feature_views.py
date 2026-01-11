import hopsworks
import os
from dotenv import load_dotenv
from collections import defaultdict

PROJECT_NAME = "el_carbon_intensity"
DRY_RUN = False
KEEP_N = 1

load_dotenv()

def main():
    project = hopsworks.login(
        host=os.getenv("HOPSWORKS_HOST"),
        project=os.getenv("HOPSWORKS_PROJECT"),
        api_key_value=os.getenv("HOPSWORKS_API_KEY"),
    )
    fs = project.get_feature_store()


    all_ci_versions = fs.get_feature_views(name="ci_actuals_fv")
    latest_ci_fv = sorted(all_ci_versions, key=lambda fv: fv.version)
    all_cp_versions = fs.get_feature_views(name="ci_predictions_fv")
    latest_cp_fv = sorted(all_cp_versions, key=lambda fv: fv.version)
    feature_views = latest_ci_fv[:-KEEP_N] + latest_cp_fv[:-KEEP_N]

    for fv in feature_views:
        try:
            if DRY_RUN:
                print(f"[DRY-RUN] Would delete {fv.name} v{fv.version}")
            else:
                print(f"Deleting version: {fv.version}")
                fv.delete()
        except Exception as e:
            print(
                f"Could not delete {fv.name} v{fv.version}: {e}"
            )

if __name__ == "__main__":
    main()
