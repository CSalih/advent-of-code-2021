import { BingoNodeInterface } from "./bingo.type";

export class BingoNode<T> implements BingoNodeInterface<T> {
  private right: BingoNodeInterface<T> = new LastBingoNode();
  private bottom: BingoNodeInterface<T> = new LastBingoNode();
  private drawn: Boolean = false;
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  draw(): Boolean {
    return (this.drawn = true);
  }

  isDrawn(): Boolean {
    return this.drawn;
  }

  setRight(node: BingoNodeInterface<T>) {
    this.right = node;
  }

  getRight(): BingoNodeInterface<T> {
    return this.right;
  }

  isLastRight(): Boolean {
    return this.right instanceof LastBingoNode;
  }

  setBottom(node: BingoNodeInterface<T>) {
    this.bottom = node;
  }

  getBottom(): BingoNodeInterface<T> {
    return this.bottom;
  }

  isLastBottom(): Boolean {
    return this.bottom instanceof LastBingoNode;
  }

  getValue(): T {
    return this.value;
  }
}

class LastBingoNode<T> implements BingoNodeInterface<T> {
  getValue(): T {
    throw new Error("Method not implemented.");
  }
  draw(): void {
    throw new Error("Method not implemented.");
  }
  isLastBottom(): Boolean {
    throw new Error("Method not implemented.");
  }
  getBottom(): BingoNodeInterface<T> {
    throw new Error("Method not implemented.");
  }
  isDrawn(): Boolean {
    throw new Error("Method not implemented.");
  }
  isLastRight(): Boolean {
    throw new Error("Method not implemented.");
  }
  getRight(): BingoNodeInterface<T> {
    throw new Error("Method not implemented.");
  }
}
