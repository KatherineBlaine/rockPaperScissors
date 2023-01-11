class Player {
    constructor(name) {
        this.name = name;
        this.wins = 0;
        if (name === 'human') {
            this.token = '👩🏻‍🦱';
        } else if (name === 'computer') {
            this.token = '🖥';
        }
    }

    takeTurn() {
        if (this.name === 'human') {
            this.fighter = 'rock';
        } else if (this.name === 'computer') {
            this.fighter = fighters[[Math.floor(Math.random() * fighters.length)]]
        }
    }
}

// What do I want to happen when the takeTurn method is invoked?
// What is the general situation in which I plan to invoke this function?

// Take turn will be invoked when the user makes a choice (after the game type is selected)
// i.e. - when the user CLICKS a fighter (rock, paper, or scissors)
// It will be invoked inside an event listener
// NO- two new players will be instantiated on page load.

// What will it need to do?
// It should: 
// 1: Record the desision the Player makes? - which fighter did they choose?
// Or will this be in the game class?
// How do I want my classes to interact? What is the overall purpose of instantiating a new player?

// randomizer: 
// create an array of the elements
// var fighters = ['rock', 'paper', 'scissors']