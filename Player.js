class Player {
  constructor(PlayerName, PlayerSymbol) {
    this.PlayerName = PlayerName    
    this.PlayerSymbol = PlayerSymbol    
  }

  static newPlayer(PlayerName, PlayerSymbol){
    if(typeof PlayerName !== 'string'){
      return null
    }
    let player = new Player(PlayerName, PlayerSymbol)
    return player
  }
}

module.exports = Player;
