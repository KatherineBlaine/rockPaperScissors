class Game {
    constructor(classOrDiff) {
        this.playerOne = new Player('computer')
        this.playerTwo = new Player('human')
        this.gameType = classOrDiff;
        if (this.gameType === 'classic') {
            this.rules = classicRules
        } else {
            this.rules = difficultRules
        }
    }

    createGameBoard(humanChoice) {
        if (this.gameType === 'classic') {
            this.playerOne.takeTurn(null, classicFighters)
            this.playerTwo.takeTurn(humanChoice)
            this.gameBoard = [this.playerOne.fighter, this.playerTwo.fighter] 
        } else if (this.gameType === 'difficult') {
            this.playerOne.takeTurn(null, heroFighters)
            this.playerTwo.takeTurn(humanChoice)
            this.gameBoard = [this.playerOne.fighter, this.playerTwo.fighter] 
          }

    }

    playGame() {
        if (this.rules[`${this.gameBoard[0]} > ${this.gameBoard[1]}`] === true) {
            this.playerOne.wins += 1;
            return 'Computer Wins!'
        } else if (this.rules[`${this.gameBoard[0]} > ${this.gameBoard[1]}`] === false) {
            this.playerTwo.wins += 1;
            return 'You Win!'
        } else {
            return 'You tied!'
        }
    }

}