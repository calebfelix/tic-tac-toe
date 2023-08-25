class Player {
  constructor(playerName, playerSymbol) {
    this.playerName = playerName    
    this.playerSymbol = playerSymbol    
  }

  getPlayerName(){
    return this.playerName
  }

  getPlayerSymbol(){
    return this.playerSymbol
  }
}

module.exports = Player;
