class Game {
    constructor() {
        this.playerOne = new Player('computer');
        this.playerTwo = new Player(nameInput);
    }

    createGameBoard(humanChoice) {
        this.playerTwo.takeTurn(humanChoice, null);
        if (this.gameType === 'classic') {
            this.playerOne.takeTurn(null, classicFighters);
            this.gameBoard = [this.playerOne.fighter, this.playerTwo.fighter];
        } else if (this.gameType === 'difficult') {
            this.playerOne.takeTurn(null, heroFighters)
            this.gameBoard = [this.playerOne.fighter, this.playerTwo.fighter] 
          }
    }

    playGame() {
        if (this.rules[`${this.gameBoard[0]} > ${this.gameBoard[1]}`] === true) {
            this.playerOne.wins += 1;
            return 'Computer Wins!'
        } else if (this.rules[`${this.gameBoard[0]} > ${this.gameBoard[1]}`] === false) {
            this.playerTwo.wins += 1;
            return 'You Win!';
        } else if (this.gameBoard[0] === this.gameBoard[1]){
            return 'You tied!';
        }
    }

    chooseGameMode(classOrDiff) {
        this.gameType = classOrDiff;
        if (this.gameType === 'classic') {
            this.rules = classicRules;
        } else if (this.gameType === 'difficult'){
            this.rules = difficultRules;
        }
        return this.gameType;
    }
}