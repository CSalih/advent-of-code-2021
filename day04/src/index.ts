import { readFileSync } from "fs";
import { BingoGame } from "./bingo-game";

const inputShort = readFileSync("resources/input.txt", "utf8");
const game = BingoGame.createFromInput(inputShort);

const winners = game.getWinners();
console.log("The first winner is:", winners.shift()?.score);
console.log("The last winner is:", winners.pop()?.score);
