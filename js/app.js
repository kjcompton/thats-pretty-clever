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

const calculateBlue = (marks) => {
    let total = 0
}