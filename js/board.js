export default class Board {
    constructor() {
        this.yellowArea = [false, false, false, false, false, false, false, false, false, false, false, false]
        this.blueArea = [false, false, false, false, false, false, false, false, false, false, false]
        this.greenArea = [false, false, false, false, false, false, false, false, false, false, false]
        this.orangeArea = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        this.purpleArea = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        this.numOfFoxes = 0
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