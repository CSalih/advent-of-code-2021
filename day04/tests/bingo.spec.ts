import { readFileSync } from "fs";

import { expect } from "chai";
import { describe } from "mocha";
import { BingoGame } from "../src/bingo-game";

describe("Test Bingo with short input", () => {
  const inputShort = readFileSync("resources/input_short.txt", "utf8");
  const game = BingoGame.createFromInput(inputShort);
  const winners = game.getWinners();

  it("There should be at least one winner", () => {
    expect(winners?.length).to.at.least(1);
  });
  it("Score of partOne should be 4512", () => {
    const firstWinner = winners.shift();
    expect(firstWinner?.score).to.equal(4512);
  });
  it("Score of partTwo should be 1924", () => {
    const lastWinner = winners.pop();
    expect(lastWinner?.score).to.equal(1924);
  });
});

describe("Bingo game test with full input", () => {
  const inputShort = readFileSync("resources/input.txt", "utf8");
  const game = BingoGame.createFromInput(inputShort);
  const winners = game.getWinners();

  it("There should be at least two winners", () => {
    expect(winners?.length).to.at.least(2);
  });
  it("Score of partOne should be 51034", () => {
    const firstWinner = winners.shift();
    expect(firstWinner?.score).to.equal(51034);
  });
  it("Score of partTwo should be 5434", () => {
    const lastWinner = winners.pop();
    expect(lastWinner?.score).to.equal(5434);
  });
});
