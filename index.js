const Game = require("./Game")

let [g1,msg1] = Game.newGame("caleb", "felix")
// let [g2,msg2] = Game.newGame(2, "felix")
let [g2,msg2] = Game.newGame("caleb2", "felix2")

// Draw
console.log(g1.play("0")) // invalid input
console.log(g1.play(0))
console.log(g1.play(1))
console.log(g1.play(2))
console.log(g1.play(4))
console.log(g1.play(5))
console.log(g1.play(3))
console.log(g1.play(6))
console.log(g1.play(8))
console.log(g1.play(7))
console.log(g1.play(7)) // already filled 

// O Winner
console.log(g2.play(5))
console.log(g2.play(1))
console.log(g2.play(8))
console.log(g2.play(0))
console.log(g2.play(4))
console.log(g2.play(2))

// X Winner
console.log(g2.play(1))
console.log(g2.play(5))
console.log(g2.play(0))
console.log(g2.play(8))
console.log(g2.play(2))
console.log(g2.play(4))






