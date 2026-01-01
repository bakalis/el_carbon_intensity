import hopsworks
import polars as pl
import great_expectations as ge
from pathlib import Path
from helpers.utils import read_csv_folder
from helpers.config import HopsworksSettings

settings = HopsworksSettings(_env_file="./.env")
project = hopsworks.login(engine="python")

ci_raw = read_csv_folder(
    Path("data/carbon-intensity"), parse_datetime_cols=["Datetime (UTC)"]
)
ci_features = (
    ci_raw.rename(
        {
            "Datetime (UTC)": "datetime",
            "Zone id": "zone_id",
            "Carbon intensity gCO₂eq/kWh (direct)": "ci_direct",
            "Carbon intensity gCO₂eq/kWh (Life cycle)": "ci_lifecycle",
            "Data estimated": "data_estimated",
        }
    )
    .select(["datetime", "zone_id", "ci_direct", "ci_lifecycle", "data_estimated"])
    # Remove all rows that have NaNs
    .filter(~pl.any_horizontal(pl.col(pl.FLOAT_DTYPES).is_nan()))
    .sort("datetime")
)

ci_expectation_suite = ge.core.ExpectationSuite(
    expectation_suite_name="ci_expectation_suite"
)

# Add expectations for carbon intensity columns: values between 0 and 500
for col in ["ci_direct", "ci_lifecycle"]:
    ci_expectation_suite.add_expectation(
        ge.core.ExpectationConfiguration(
            expectation_type="expect_column_values_to_be_between",
            kwargs={"column": col, "min_value": 0, "max_value": 500, "mostly": 1.0},
        )
    )


fs = project.get_feature_store()

carbon_intensity_fg = fs.get_or_create_feature_group(
    name="carbon_intensity",
    description="Carbon Intensity characteristics of each hour",
    version=1,
    primary_key=["zone_id"],
    event_time="datetime",
    expectation_suite=ci_expectation_suite,
)

carbon_intensity_fg.insert(ci_features, wait=True)

carbon_intensity_fg.update_feature_description(
    "datetime", "Date and time of carbon intensity data point (utc)"
)
carbon_intensity_fg.update_feature_description(
    "zone_id", "Id of the region the data point is valid for"
)
carbon_intensity_fg.update_feature_description(
    "ci_direct", "Emissions released directly from the operation of the power plant"
)
carbon_intensity_fg.update_feature_description(
    "ci_lifecycle",
    "Emissions from building the power plant, operating it, extracting fuel, and disposal at the end of its life",
)
carbon_intensity_fg.update_feature_description(
    "data_estimated",
    "Whether or not the value was calculated based on actual Entso-E data",
)

