import { BingoNode } from "./bingo-node";
import { BingoNodeInterface } from "./bingo.type";

export class BingoBoard<T> {
  private readonly maxColumn = 5;
  private readonly maxRow = 5;
  private nodes: BingoNodeInterface<T>[] = [];
  private isWinner: Boolean = false;

  constructor(values: T[]) {
    var nodes = values.map((value) => new BingoNode(value));
    nodes.forEach((node, index, nodes) => {
      // set right pointers
      // TODO: dont be lazy!
      if (index > 24) throw new Error("The lazyness goes til here!");
      if (![4, 9, 14, 19, 24].includes(index)) {
        node.setRight(nodes[index + 1]);
      }
      // set bottom pointers
      if (index <= this.maxRow * (this.maxColumn - 1) - 1) {
        node.setBottom(nodes[index + this.maxRow]);
      }
    });
    this.nodes = nodes;
  }

  draw(number: T): void {
    for (const node of this.nodes) {
      if (node.getValue() == number) {
        node.draw();
      }
    }
  }

  hasBingo(): Boolean {
    if (this.isWinner) {
      return this.isWinner;
    }
    // TODO: we can improve here the performace (move this within draw() and check only row and column where a draw applied)
    // check rows
    for (
      var i = 0;
      i <= this.maxRow * (this.maxColumn - 1);
      i += this.maxColumn
    ) {
      var node: BingoNodeInterface<T> = this.nodes[i];
      const tt = [];
      while (node.isDrawn()) {
        tt.push(node.getValue());
        if (node.isLastRight()) {
          this.isWinner = true;
          return this.isWinner;
        }
        node = node.getRight();
      }
    }
    // check columns
    for (var i = 0; i < this.maxRow; i++) {
      var node: BingoNodeInterface<T> = this.nodes[i];
      while (node.isDrawn()) {
        if (node.isLastBottom()) {
          this.isWinner = true;
          return this.isWinner;
        }
        node = node.getBottom();
      }
    }
    return false;
  }

  getNodes(): BingoNodeInterface<T>[] {
    return this.nodes;
  }
}
