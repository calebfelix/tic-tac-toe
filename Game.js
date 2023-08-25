const Board = require("./Board");
const Player = require("./Player");

class Game {
  constructor(player1, player2) {
    this.players = [new Player(player1, "X"), new Player(player2, "O")];
    this.board = new Board();
    this.turn = 0;
    this.endGame = false;
  }

  static newGame(player1Name, player2Name) {
    // validate
    if (
      typeof player2Name !== "string" ||
      typeof player1Name !== "string" ||
      player1Name === player2Name
    ) {
      return [null, ""];
    }
    let newGame = new Game(player1Name, player2Name);
    return [newGame, "Game Created"];
  }

  play(cellNumber) {
    if (typeof cellNumber !== "number") {
      return "invalid input";
    }
    if (cellNumber > 8 || cellNumber < 0) {
      return "invalid cell Number";
    }
    if (this.endGame) {
      return "------------ Game Over!!! ------------";
    }
    if (!this.board.cells[cellNumber].isEmpty()) {
      return "cell Already Filled";
    }

    // current player detection
    let currentPlayer = this.players[this.turn % 2];
    this.turn++;

    // change symbol
    this.board.getCell(cellNumber).mark = currentPlayer.getPlayerSymbol();

    // print board
    console.log(this.board.printBoard());

    // Analyse board
    let [status, winner] = this.board.analyseBoard();
    if (status === "" && winner === "") {
      return "continue game...";
    }
    if (status === "draw") {
      this.endGame = true;
      return "It's a Draw!!!";
    }
    if (status === "win") {
      this.endGame = true;
      return `${winner} is the Winner!!!`;
    }
  }
}

module.exports = Game;
