import { BingoBoard } from "./bingo-board";

export interface BingoGameInterface<T> {
  drawnNumbers: T[];
  boards: BingoBoard<T>[];

  getWinners(): BingoWinnerInterface<T>[];
}

export interface BingoWinnerInterface<T> {
  score: T;
  board: BingoBoard<T>;
}

export interface BingoNodeInterface<T> {
  isDrawn(): Boolean;
  isLastRight(): Boolean;
  isLastBottom(): Boolean;
  getRight(): BingoNodeInterface<T>;
  getBottom(): BingoNodeInterface<T>;
  getValue(): T;
  draw(): void;
}
