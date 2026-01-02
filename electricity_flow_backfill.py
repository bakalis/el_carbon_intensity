import hopsworks
import great_expectations as ge
import polars as pl
from pathlib import Path
from helpers.utils import read_csv_folder
from helpers.config import HopsworksSettings
from helpers.transformations import GENERATION_MAPPING, entsoe_generation_transform

settings = HopsworksSettings(_env_file="./.env")
project = hopsworks.login(engine="python")


df_raw = read_csv_folder(
    Path("data/electricity-flow"), parse_datetime_cols=["Datetime (UTC)"]
)

flow_features = (
    df_raw.rename(
        {
            "Datetime (UTC)": "datetime",
            "Zone id": "zone_id",
        }
    )
    # Remove all rows that have NaNs
    .filter(~pl.any_horizontal(pl.col(pl.FLOAT_DTYPES).is_nan()))
    .sort("datetime")
)

flow_expectation_suite = ge.core.ExpectationSuite(
    expectation_suite_name="flow_expectation_suite"
)

# Add expectations for import/export columns: values between 0 and 50000
for col in ["import", "export"]:
    flow_expectation_suite.add_expectation(
        ge.core.ExpectationConfiguration(
            expectation_type="expect_column_values_to_be_between",
            kwargs={"column": col, "min_value": 0, "max_value": 50000, "mostly": 1.0},
        )
    )


fs = project.get_feature_store()

electricity_flow_fg = fs.get_or_create_feature_group(
    name="electricity_flow",
    description="Electricity imports/exports for zones at time",
    version=1,
    primary_key=["zone_id"],
    event_time="datetime",
    expectation_suite=flow_expectation_suite,
)

electricity_flow_fg.insert(flow_features, wait=True)

electricity_flow_fg.update_feature_description(
    "datetime", "Date and time of electricity import/export data (utc)"
)
electricity_flow_fg.update_feature_description(
    "zone_id", "Id of the region the data point is valid for"
)
electricity_flow_fg.update_feature_description(
    "import", "Total electricity import in MW"
)
electricity_flow_fg.update_feature_description(
    "export", "Total electricity export in MW"
)