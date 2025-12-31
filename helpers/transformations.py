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