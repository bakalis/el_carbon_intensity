from pathlib import Path
import polars as pl

def read_csv_folder(
    folder: Path,
    *,
    delimiter: str | None = ",",
    parse_datetime_cols: list[str] | None = None
) -> pl.DataFrame:
    files = sorted(folder.glob("*.csv"))
    if not files:
        raise ValueError(f"No CSV files found in {folder}")

    # Read all CSVs first
    dfs = [pl.read_csv(f, separator=delimiter) for f in files]

    # Determine global schema: map column -> type
    col_types = {}
    for df in dfs:
        for col, dtype in zip(df.columns, df.dtypes):
            # If col is new or dtype is more "general", update
            if col not in col_types:
                col_types[col] = dtype
            else:
                # If conflict, prefer object (Utf8) or fallback to Utf8 for simplicity
                if col_types[col] != dtype:
                    col_types[col] = pl.Utf8  # safest fallback

    all_cols = list(col_types.keys())

    # Align columns in each df: add missing with nulls cast to correct type
    aligned_dfs = []
    for df in dfs:
        missing_cols = [col for col in all_cols if col not in df.columns]
        for col in missing_cols:
            # Add missing column with nulls cast to col_types[col]
            df = df.with_columns([
                pl.lit(None, dtype=col_types[col]).alias(col)
            ])
        # Reorder columns
        df = df.select(all_cols)
        aligned_dfs.append(df)

    # Concatenate aligned DataFrames
    df = pl.concat(aligned_dfs, how="vertical", rechunk=True)

    # Parse datetime columns if specified
    if parse_datetime_cols:
        df = df.with_columns(
            [pl.col(c).str.to_datetime() for c in parse_datetime_cols]
        )

    return df
