import numpy as np
import pandas as pd


GENERATION_MAPPING = {
    "coal": [
        "fossil brown coal / lignite",
        "fossil hard coal",
        "fossil oil shale",
        "fossil peat",
    ],
    "oil": ["fossil oil"],
    "gas": ["fossil gas", "fossil coal-derived gas"],
    "geothermal": ["geothermal"],
    "solar": ["solar"],
    "hydro": ["hydro run-of-river and poundage", "hydro water reservoir"],
    "hydro_storage": ["hydro pumped storage"],
    "wind": ["wind offshore", "wind onshore"],
    "biomass": ["biomass", "waste"],
    "battery_storage": ["energy storage"],
    "nuclear": ["nuclear"],
    "other": ["marine", "other", "other renewable"],
}


def entsoe_generation_transform(df: pd.DataFrame) -> pd.DataFrame:
    # normalize column names
    df.columns = [c.strip().lower() for c in df.columns]

    df = df.rename(
        columns={
            "datetime (utc)": "datetime",
            "zone id": "zone_id",
        }
    )

    # validate columns
    allowed_columns = {
        "datetime",
        "zone_id",
        *[c for cols in GENERATION_MAPPING.values() for c in cols],
    }

    unknown = set(df.columns) - allowed_columns
    if unknown:
        raise ValueError(f"Unrecognized columns found: {sorted(unknown)}")

    # aggregate generation types
    out = df[["datetime", "zone_id"]].copy()

    for target, cols in GENERATION_MAPPING.items():
        existing = [c for c in cols if c in df.columns]

        if existing:
            out[target] = df[existing].sum(axis=1)
        else:
            out[target] = 0.0

    # sort by datetime
    out = out.sort_values("datetime", kind="stable").reset_index(drop=True)

    # add total
    out["total"] = out[list(GENERATION_MAPPING.keys())].sum(axis=1)

    return out


def model_dependent_transform(X: pd.DataFrame, selected_features: list[str]) -> pd.DataFrame:
    df = X[selected_features].copy()

    # Define column groups
    generation_cols = [
        c for c in df.columns
        if c not in {"datetime", "total", "import", "load", "export"}
    ]

    # Compute totals
    df["available_total"] = df["total"] + df["import"]
    df["used_total"] = df["load"] + df["export"]

    # Avoid division by zero
    available_total = df["available_total"].replace(0, np.nan)
    used_total = df["used_total"].replace(0, np.nan)

    # Normalize generation sources
    for col in generation_cols:
        df[f"{col}_portion"] = df[col] / available_total

    # Normalize import
    df["import_portion"] = df["import"] / available_total

    # Normalize load & export
    df["load_portion"] = df["load"] / used_total
    df["export_portion"] = df["export"] / used_total

    # Final column selection
    output_cols = (
        ["datetime"]
        + [f"{c}_portion" for c in generation_cols]
        + ["import_portion", "available_total", "load_portion", "export_portion", "used_total"]
    )

    return df[output_cols]