class Game {
    constructor(classOrDiff) {
        this.playerOne = new Player('computer')
        this.playerTwo = new Player('human')
        this.gameType = classOrDiff;
        if (classOrDiff === 'classic') {
            this.rules = {
                'rock > scissors': true,
                'scissors > rock': false,
                'scissors > paper': true,
                'paper > scissors': false,
                'rock > paper': false,
                'paper > rock': true,
        }
        }
    }

    whoWon(humanChoice) {
        this.playerOne.takeTurn()
        this.playerTwo.takeTurn(humanChoice)
        this.gameBoard = [this.playerOne.fighter, this.playerTwo.fighter]
        if (this.rules[`${this.gameBoard[0]} > ${this.gameBoard[1]}`]) {
            this.playerOne.wins += 1;
            return;
        } else if (this.rules[`${this.gameBoard[0]} > ${this.gameBoard[1]}`] === false) {
            this.playerTwo.wins += 1;
            return;
        } else {
            return 'You tied!'
        }
    }
}