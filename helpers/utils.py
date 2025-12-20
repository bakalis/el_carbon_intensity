import polars as pl
from pathlib import Path

def read_csv_folder(
    folder: Path,
    *,
    delimiter: str | None = ",",
    parse_datetime_cols: list[str] | None = None
) -> pl.DataFrame:
    files = sorted(folder.glob("*.csv"))
    if not files:
        raise ValueError(f"No CSV files found in {folder}")

    df = pl.concat(
        [pl.read_csv(f, separator=delimiter) for f in files],
        how="vertical",
        rechunk=True,
    )

    if parse_datetime_cols:
        df = df.with_columns(
            [pl.col(c).str.to_datetime() for c in parse_datetime_cols]
        )

    return df
