import Board from './board.js'
import Die from './die.js'

const shuffleDice = (array) => {
    let shuffled = array.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort -b.sort).map(({ value }) => value)
    return shuffled
}
const rollDice = () => {
    for (let i = 0; i < diceInHand.length; i++) {
        diceInHand[i].rollDie()
    }
    diceInHand = shuffleDice(diceInHand)
    console.log(diceInHand)
}

const playActiveRound = () => {
    //set action button to roll the dice
    rollDice()
}

const playPassiveRound = () => {

}

const playRound = () => {
    yellowDie.currentSide = 1
    blueDie.currentSide = 1
    greenDie.currentSide = 1
    orangeDie.currentSide = 1
    purpleDie.currentSide = 1
    whiteDie.currentSide = 1
    diceInHand = [yellowDie,  blueDie, greenDie, orangeDie, purpleDie, whiteDie]
    rollDice()

    //Active Round
    //First Roll click button to roll
    //Choose Die from rolled
    //Qualifying Die are discarded
    //playActiveRound()

    //Second Roll click button to roll from remaining dice if any
    //Choose die from rolled
    //Qualifying Die are discarded

    //Last Roll click button to roll from remaining dice if any
    //Choose die from rolled
    //All remaining die are discarded

    //Passive Round
    //If 1 player
    //Computer rolls and the lowest 3 are discarded click to have computer roll
    //If must choose from 2 of the same number choose the one closest to tray
    //Active player chooses one of the die to use on their board
    //If active player cannot use any of the die then they can choose from the other dice

    //if 2 player
    //Passive player chooses 1 from discard pile
    //If passive player cannot use any from discard then they can use any from the active players chosen
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
const yellowDie = new Die('yellow')
const blueDie = new Die('blue')
const greenDie = new Die('green')
const orangeDie = new Die('orange')
const purpleDie = new Die('purple')
const whiteDie = new Die('white')
let diceInHand = []
let rolledDice = []
let discardedDice = []
let diceChosen = []

playRound()



