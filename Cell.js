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
  }


  
  module.exports = Cell;
  