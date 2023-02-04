import Board from './board.js'
import Die from './die.js'

const discardDice = () => {
    for (let i = 0; i < rolledDice.length; i++) {
        if (rolledDice[i] !== '' && rolledDice[i].currentSide < diceChosen[diceChosen.length-1].currentSide) {
            discardedDice.push(rolledDice.splice(i, 1, '')[0])
            discardContainer[discardedDice.length-1].dataset.color = rolledContainer[i].dataset.color
            discardContainer[discardedDice.length-1].dataset.side = rolledContainer[i].dataset.side
            rolledContainer[i].dataset.color = ''
            rolledContainer[i].dataset.side = ''
        }
    }
    rolledContainer.forEach(element => {
        element.style.pointerEvents = 'none'
    })
    activeRound += 1
    actionButton.disabled = false
    
}


const shuffleDice = (array) => {
    let shuffled = array.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort -b.sort).map(({ value }) => value)
    return shuffled
}
const rollComputerDice = () => {
    for (let i = 0; i < diceInHand.length; i++) {
        if (diceInHand[i] != '') {
            diceInHand[i].rollDie()
        }
    }
    diceInHand = shuffleDice(diceInHand)
    rolledDice = diceInHand
    for (let i = 0; i < rolledDice.length; i++) {
        rolledContainer[i].dataset.color = rolledDice[i].color
        rolledContainer[i].dataset.side = rolledDice[i].currentSide
    }
    updateGraphics()
}

const rollDice = () => {
    for (let i = 0; i < diceInHand.length; i++) {
        if (diceInHand[i] != '') {
            diceInHand[i].rollDie()
        }
    }
    diceInHand = shuffleDice(diceInHand)
    rolledDice = diceInHand
    for (let i = 0; i < rolledDice.length; i++) {
        rolledContainer[i].dataset.color = rolledDice[i].color
        rolledContainer[i].dataset.side = rolledDice[i].currentSide
    }
    updateGraphics()
    rolledContainer.forEach(element => {
        element.style.pointerEvents = 'auto'
    })
    actionButton.disabled = true
}

const updateGraphics = () => {
    rolledContainer.forEach(element => {
        if (element.dataset.color !== '' && element.dataset.side !== '' && element.dataset.color !== 'undefined' && element.dataset.side !== 'undefined') {
            element.querySelector('img').src = `../assets/${element.dataset.color}${element.dataset.side}.png`
        }
        else { element.querySelector('img').src = '' }
    })
    discardContainer.forEach(element => {
        if (element.dataset.color !== '' && element.dataset.side !== '' && element.dataset.color !== 'undefined' && element.dataset.side !== 'undefined') {
            element.querySelector('img').src = `../assets/${element.dataset.color}${element.dataset.side}.png`
        }
        else { element.querySelector('img').src = '' }
    })
    chosenContainer.forEach(element => {
        if (element.dataset.color !== '' && element.dataset.side !== '' && element.dataset.color !== 'undefined' && element.dataset.side !== 'undefined') {
            element.querySelector('img').src = `../assets/${element.dataset.color}${element.dataset.side}.png`
        }
        else { element.querySelector('img').src = '' }
    })
}

const playActiveRound = () => {
    //set action button to roll the dice
    console.log(activeRound)
    if (activeRound == 1) {
        console.log("Round 1")
        rollDice()
    }
    if (activeRound == 2) {
        if ((discardedDice.length + diceChosen.length) >= 6) {
            console.log('Ran out of dice at round 2')
            gameRound+=1
            passiveRound = true
            roundReset = true
        }
        else {
            console.log("Round 2")
            rollDice()
        }
    }

    if (activeRound == 3) {
        if ((discardedDice.length + diceChosen.length) >= 6) {
            console.log('Ran out of dice at round 3')
            rolledContainer.forEach(element => {
                element.style.pointerEvents = 'none'
            })
            gameRound+=1
            passiveRound = true
            roundReset = true
        }
        else {
            console.log("Round 3")
            rollDice()
        }
        console.log('Last Round')
        gameRound+=1
        passiveRound = true
        roundReset = true
        
        
    }
    
}
const playPassiveComputerRound = () => {
    
    console.log('Choose Passive Die')
    resetDice()
    rollComputerDice()
}
const resetDice = () => {
    
    yellowDie.currentSide = 1
    blueDie.currentSide = 1
    greenDie.currentSide = 1
    orangeDie.currentSide = 1
    purpleDie.currentSide = 1
    whiteDie.currentSide = 1
    diceInHand = [yellowDie,  blueDie, greenDie, orangeDie, purpleDie, whiteDie]
    rolledDice = []
    discardedDice = []
    diceChosen = []
    rolledContainer.forEach(element => {
        element.dataset.color = ''
        element.dataset.side = ''
    })
    discardContainer.forEach(element => {
        element.dataset.color = ''
        element.dataset.side = ''
    })
    chosenContainer.forEach(element => {
        element.dataset.color = ''
        element.dataset.side = ''
    })
}

const endGame = () => {
    console.log("Game has ended!")
    let yellowValues = []
    document.querySelectorAll('.yellowValue').forEach(element => {
        yellowValues.push(element.checked)
    })
    let blueValues = []
    document.querySelectorAll('.blueValue').forEach(element => {
        blueValues.push(element.checked)
    })
    let greenValues = []
    document.querySelectorAll('.greenValue').forEach(element => {
        greenValues.push(element.checked)
    })
    let orangeValues = []
    document.querySelectorAll('.orangeValue').forEach(element => {

        orangeValues.push(parseInt(element.value))
    })
    let purpleValues = []
    document.querySelectorAll('.purpleValue').forEach(element => {
        purpleValues.push(parseInt(element.value))
    })
    console.log(orangeValues)
    console.log(greenValues)
    const player1Board = new Board(yellowValues, blueValues, greenValues, orangeValues, purpleValues)
    console.log(player1Board)
    document.getElementById('gameEndContainer').style.display = 'flex';
    document.getElementById('yellow-counter').innerHTML = player1Board.calculateYellow()
    document.getElementById('blue-counter').innerHTML = player1Board.calculateBlue()
    document.getElementById('green-counter').innerHTML = player1Board.calculateGreen()
    document.getElementById('orange-counter').innerHTML = player1Board.calculateOrange()
    document.getElementById('purple-counter').innerHTML = player1Board.calculatePurple()
}

const playRound = () => {
    
    document.getElementById('roundCounter').innerHTML = `Round: ${gameRound}`
    if (passiveRound === true) {
        document.getElementById('roundCounter').innerHTML = `Round: Passive`
        rolledContainer.forEach(element => {
            element.style.pointerEvents = 'none'
        })
        actionButton.disabled = false
        playPassiveComputerRound()
        passiveRound = false
    }
    else if (gameRound > 7) {
        endGame()
    }
    else if (roundReset === true) {
        resetDice()
        console.log('ROUND RESET!!!')
        activeRound = 1
        roundReset = false
        playActiveRound()
    }
    
    else {
        playActiveRound()
    }

    

    
 
    
    
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


const yellowDie = new Die('yellow')
const blueDie = new Die('blue')
const greenDie = new Die('green')
const orangeDie = new Die('orange')
const purpleDie = new Die('purple')
const whiteDie = new Die('white')
let roundReset = true
let activeRound = 1
let passiveRound = false
let gameRound = 1
let diceInHand = []
let rolledDice = []
let discardedDice = []
let diceChosen = []
let rolledContainer = document.querySelectorAll(".rolled-container div")
let discardContainer = document.querySelectorAll(".discard-container div")
let chosenContainer = document.querySelectorAll(".dice-chosen-container div")
let actionButton = document.getElementById('actionButton')
actionButton.addEventListener('click', playRound)
rolledContainer.forEach(element => {
    element.addEventListener('click', event => {
        diceChosen.push(rolledDice.splice(element.dataset.placement, 1, '')[0])
        chosenContainer[activeRound-1].dataset.color = element.dataset.color
        chosenContainer[activeRound-1].dataset.side = element.dataset.side
        element.dataset.color= ''
        element.dataset.side= ''
        discardDice()
        updateGraphics()
    })
})




