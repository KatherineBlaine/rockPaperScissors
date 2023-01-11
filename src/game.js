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

    whoWon() {
        this.playerOne.takeTurn()
        this.playerTwo.takeTurn()
        console.log(`player one fighter: ${this.playerOne.fighter}`)
        console.log(`player two fighter: ${this.playerTwo.fighter}`)
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

// A new Game will be instantiated on page load. It will have a hard coded playerOne which will be the computer, and a hard coded playerTwo which will be the person.
// ?? Only difference, as of now, and this may not be necessary, is that each page load will create a unique ID for both players.
// An argument of 'name' will be passed through the name param and will differentiate between the computer and the human player.

// This class needs a 'way to keep track of the data for the game board'
// game board = the set of fighters displayed on the screen

// This.winCombos = 

// if playerOne.figter > playerTwo fighter 
// playerOne.wins +=1;

// Game Rules:
// Rock beats scissors
// scissors beats paper
// paper beats rock

// rock > scissors = true
// scissors > paper = true
// paper > rock = true