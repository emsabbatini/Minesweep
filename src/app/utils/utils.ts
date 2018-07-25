import { Cell, CellsMatrix } from './../components/cell/cell';
import { Dimension } from './../components/main/size';
import { BoardPosition } from './../components/board/board';

const newCell: Cell = {
    isMine: false,
    beaten: false,
    discovered: false,
    marked: false,
    probability: 0
};

export class Utils {

    static generateMatrixWithNewsCells(dimensions: Dimension): CellsMatrix {
        const matrix: CellsMatrix = [];
        this.iterateOfNumberToCallBack(dimensions.rows, (row: number) => {
            matrix[row] = [];
            this.iterateOfNumberToCallBack(dimensions.columns, (column: number) => {
                matrix[row][column] = { ...newCell };
            });
        });
        return matrix;
    }

    private static iterateOfNumberToCallBack(count: number, callback: any) {
        for (let index = 0; index < count; index++) {
            callback(index);
        }
    }

    static getRandomPosition(dimension: Dimension): BoardPosition {
        return {
            row: this.getRandomNumber(dimension.rows),
            column: this.getRandomNumber(dimension.columns)
        };
    }

    static getRandomNumber(number: number): number {
        return Math.floor(Math.random() * number);
    }
}