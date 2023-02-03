export default class Die {
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