// class Board {
//     constructor(player) {
//         this.player = player
//         this.yellowArea = [[3, false], [6, false], [5, false], [true],
//                            [2, false], [1, false], [true], [5, false],
//                            [1, false], [true], [2, false], [4, false],
//                            [true], [3, false], [4, false], [6, false]]
//         this.blueArea = [[2, false], [3, false], [4, false], [5, false], [6, false], [7, false], [8, false], [9, false], [10, false], [11, false], [12, false]]
//         this.greenArea = [[1, false], [2, false], [3, false], [4, false], [5, false], [1, false], [2, false], [3, false], [4, false], [5, false], [6, false]]
//         this.orangeArea = [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]]
//         this.purpleArea = [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]]
//     }
// }

const calculateYellow = (marks) => {
    let total = 0
    if (marks[0] === true && marks[3] === true && marks[6] === true) {
        total += 10
    }
    else if (marks[1] === true && marks[4] === true && marks[9] === true) {
        total += 14
    }
    else if (marks[2] === true && marks[7] === true && marks[10] === true) {
        total += 16
    }
    else if (marks[5] === true && marks[8] === true && marks[11] === true) {
        total += 20
    }
    return total
}

//Think this function can simply be taking the largest indes of the array that is true and returning the number on th eelement
const calculateBlue = (marks) => {
    if (marks[10] === true) {
        return 56
    }
    else if (marks[9] === true) {
        return 46
    }
    else if (marks[8] === true) {
        return 37
    }
    else if (marks[7] === true) {
        return 29
    }
    else if (marks[6] === true) {
        return 22
    }
    else if (marks[5] === true) {
        return 16
    }
    else if (marks[4] === true) {
        return 11
    }
    else if (marks[3] === true) {
        return 7
    }
    else if (marks[2] === true) {
        return 4
    }
    else if (marks[1] === true) {
        return 2
    }
    else {
        return 1
    }
}

//This could be calculated the same way as blue
const calculateGreen = () => {
    if (marks[10] === true) {
        return 66
    }
    else if (marks[9] === true) {
        return 55
    }
    else if (marks[8] === true) {
        return 45
    }
    else if (marks[7] === true) {
        return 36
    }
    else if (marks[6] === true) {
        return 28
    }
    else if (marks[5] === true) {
        return 21
    }
    else if (marks[4] === true) {
        return 15
    }
    else if (marks[3] === true) {
        return 10
    }
    else if (marks[2] === true) {
        return 6
    }
    else if (marks[1] === true) {
        return 3
    }
    else {
        return 1
    }
}

const calculateOrange = (values) => {
    let total = 0
    for ([index, value]] of values) {
        if (index === 3 || index === 6 || index === 8) {
            total += value*2
        }
        else if (index === 10) {
            total += value*3
        }
        else {
            total += value
        }
    }
}