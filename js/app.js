class Die {
    constructor(color) {
        this.sides = 6
        this.color = color
        this.currentSide = 1
    }
    rollDie () {
        this.currentSide = Math.floor(Math.random() * (this.sides - 1) + 1)
    }
    getCurrentSide() {
        return this.currentSide
    }
}

class Board {
    constructor(yellowArea, blueArea, greenArea, orangeArea, purpleArea) {
        this.yellowArea = yellowArea
        this.blueArea = blueArea
        this.greenArea = greenArea
        this.orangeArea = orangeArea
        this.purpleArea = purpleArea
        this.numOfFoxes = 3
    }

    calculateYellow() {
        let total = 0
        if (this.yellowArea[0] === true && this.yellowArea[3] === true && this.yellowArea[6] === true) {
            total += 10
        }
        else if (this.yellowArea[1] === true && this.yellowArea[4] === true && this.yellowArea[9] === true) {
            total += 14
        }
        else if (this.yellowArea[2] === true && this.yellowArea[7] === true && this.yellowArea[10] === true) {
            total += 16
        }
        else if (this.yellowArea[5] === true && this.yellowArea[8] === true && this.yellowArea[11] === true) {
            total += 20
        }
        return total
    }

    calculateBlue () {
        let totalMarks = 0
        for (let i = 0; i < this.blueArea.length; i++) {
            if (this.blueArea[i] == true) {
                totalMarks += 1
            }
        }
        if (totalMarks === 11) return 56 
        else if (totalMarks === 10) return 46 
        else if (totalMarks === 9) return 37 
        else if (totalMarks === 8) return 29 
        else if (totalMarks === 7) return 22 
        else if (totalMarks === 6) return 16 
        else if (totalMarks === 5) return 11 
        else if (totalMarks === 4) return 7 
        else if (totalMarks === 3) return 4 
        else if (totalMarks === 2) return 2 
        else if (totalMarks === 1) return 1 
        else return 0
    }

    calculateGreen () {
        if (this.greenArea[10] === true) return 66
        else if (this.greenArea[9] === true) return 55
        else if (this.greenArea[8] === true) return 45
        else if (this.greenArea[7] === true) return 36
        else if (this.greenArea[6] === true) return 28
        else if (this.greenArea[5] === true) return 21
        else if (this.greenArea[4] === true) return 15
        else if (this.greenArea[3] === true) return 10
        else if (this.greenArea[2] === true) return 6
        else if (this.greenArea[1] === true) return 3
        else if (this.greenArea[0] === true)return 1
        else return 0
    }

    calculateOrange () {
        let total = 0
        for (let i = 0; i < this.orangeArea.length; i++) {
            if (i  === 3 || i  === 6 || i  === 8) {
                total += this.orangeArea[i]*2
            }
            else if (i  === 10) {
                total += this.orangeArea[i]*3
            }
            else {
                total += this.orangeArea[i]
            }
        }
        return total
    }

    calculatePurple () {
        let total = 0
        for (let i = 0; i < this.purpleArea.length; i++) {
            total += this.purpleArea[i]
        }
        return total
    }

    calculateFoxes () {
        const scores = [this.calculateYellow(), this.calculateBlue(), this.calculateGreen(), this.calculateOrange(), this.calculatePurple()]
        let lowestScore = Math.min(...scores)
        return lowestScore * this.numOfFoxes
    }

    calculateScore () {
        const yellow = this.calculateYellow()
        const blue = this.calculateBlue()
        const green = this.calculateGreen()
        const orange = this.calculateOrange()
        const purple = this.calculatePurple()
        const foxes = this.calculateFoxes()
        const total = yellow + blue + green + orange + purple + foxes
        return total
    }

}
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
            element.querySelector('img').src = `assets/${element.dataset.color}${element.dataset.side}.png`
        }
        else { element.querySelector('img').src = '' }
    })
    discardContainer.forEach(element => {
        if (element.dataset.color !== '' && element.dataset.side !== '' && element.dataset.color !== 'undefined' && element.dataset.side !== 'undefined') {
            element.querySelector('img').src = `assets/${element.dataset.color}${element.dataset.side}.png`
        }
        else { element.querySelector('img').src = '' }
    })
    chosenContainer.forEach(element => {
        if (element.dataset.color !== '' && element.dataset.side !== '' && element.dataset.color !== 'undefined' && element.dataset.side !== 'undefined') {
            element.querySelector('img').src = `assets/${element.dataset.color}${element.dataset.side}.png`
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




