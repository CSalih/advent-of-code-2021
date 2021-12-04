import { BingoBoard } from "./bingo-board";
import { BingoGameInterface, BingoWinnerInterface } from "./bingo.type";

export class BingoGame implements BingoGameInterface<number> {
  drawnNumbers: number[];
  boards: BingoBoard<number>[];

  constructor(drawnNumbers: number[], boards: BingoBoard<number>[]) {
    this.drawnNumbers = drawnNumbers;
    this.boards = boards;
  }

  static createFromInput(input: string): BingoGameInterface<number> {
    const values = input.split("\n\n");
    const drawnNumbers = values
      .shift()
      ?.split(",")
      .map((val) => parseInt(val));
    const boards = values.map(
      (board) =>
        new BingoBoard(
          board
            .trim()
            .split(/\s+|\n/)
            .map((val) => parseInt(val))
        )
    );

    if (!drawnNumbers)
      throw new Error("Cannot parse input file! No drawn numbers found");
    if (!boards) throw new Error("Cannot parse input file! No boards found");
    return new BingoGame(drawnNumbers, boards);
  }

  getWinners(): BingoWinnerInterface<number>[] {
    var winners: BingoWinnerInterface<number>[] = [];
    for (const drawnNumber of this.drawnNumbers) {
      for (const board of this.boards) {
        if (winners.findIndex((winner) => winner.board == board) < 0) {
          board.draw(drawnNumber);
          if (board.hasBingo()) {
            const score = this.calculateScore(board, drawnNumber);
            winners.push({ score, board });
            continue;
          }
        }
      }
    }
    return winners;
  }

  private calculateScore(
    board: BingoBoard<number>,
    lastDrawnNumber: number
  ): number {
    const sumOfNotDrawnValues = board.getNodes().reduce((sum, node) => {
      if (node.isDrawn()) {
        return sum;
      }
      return sum + node.getValue();
    }, 0);
    return sumOfNotDrawnValues * lastDrawnNumber;
  }
}
