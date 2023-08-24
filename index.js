const Game = require("./Game")

g1 = new Game()
g2 = new Game()

// Draw
console.log(g1.play("0"))
console.log(g1.play(0))
console.log(g1.play(1))
console.log(g1.play(2))
console.log(g1.play(4))
console.log(g1.play(5))
console.log(g1.play(3))
console.log(g1.play(6))
console.log(g1.play(8))
console.log(g1.play(7))
console.log(g1.play(7))

// Winner
console.log(g2.play(0))
console.log(g2.play(5))
console.log(g2.play(1))
console.log(g2.play(4))
console.log(g2.play(2))
console.log(g2.play(3))
console.log(g2.play(6))