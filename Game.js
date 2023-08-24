const Board = require("./Board");
const Player = require("./Player");

class Game {
  constructor() {
    this.players = [Player.newPlayer("name1", "X"), Player.newPlayer("name2", "O")];
    this.board = new Board();
    this.turn = 0
    this.endGame = false
  }

  play(cellNumber) {
      if (typeof cellNumber !== "number"){
        return "invalid input"
      }
      if (cellNumber > 8 || cellNumber < 0){
        return "invalid cell Number"
      }
      if(this.endGame){
        return "Game Over!!!"
      }
      if (!this.board.cells[cellNumber].isEmpty()){
        return "cell Already Filled"
      }
      
      let currentPlayer = this.players[this.turn%2]
      this.turn++
      
      this.board.getCell(cellNumber).mark= currentPlayer.PlayerSymbol
      console.log(this.board.printBoard())
      
      let [status, winner] = this.board.analyseBoard();

        if(status === "" && winner === ""){
          return "continue game..."
        }
        if(status === "draw"){
          this.endGame = true
          return "It's a Draw!!!"
        }
        if(status === "win"){
          this.endGame = true
          return `${winner} is the Winner!!!`
        }
  }
}

module.exports = Game;
