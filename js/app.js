import Board from './board.js'
import Die from './die.js'

const rollDice = () => {
    redDie.rollDie()
    greenDie.rollDie()
    blueDie.rollDie()
    purpleDie.rollDie()
    orangeDie.rollDie()
    whiteDie.rollDie()
}

const playRound = () => {
    
}

const playGame = () => {

}


// document.querySelectorAll("#yellow-area input").forEach((element, index) => {
//     element.addEventListener('change', event => {
//         player1Board.yellowArea[index] = element.checked
//         console.log(player1Board.yellowArea)
//     })
// })

const player1Board = new Board
const redDie = new Die('red')
const greenDie = new Die('green')
const blueDie = new Die('blue')
const purpleDie = new Die('purple')
const orangeDie = new Die('orange')
const whiteDie = new Die('white')
let rolledDice = []
let diceInHand = []
let discardedDice = []
let diceChosen = []

console.log(redDie.side, greenDie.side, blueDie.side, purpleDie.side, whiteDie.side, orangeDie.side)



