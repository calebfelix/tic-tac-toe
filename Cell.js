class Cell {
    constructor() {
      this.mark = 'e'
    }

    isEmpty(){
      if(this.mark === 'e'){
        return true
      }
      return false
    }

    getMark(){
      return this.mark
    }
    markCellSymbol(playerSymbol){
      this.mark = playerSymbol
    }
  }


  
  module.exports = Cell;
  