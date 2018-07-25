export interface Dimension {
    rows: number;
    columns: number;
}

export interface Size extends Dimension {
    countMines: number;
}