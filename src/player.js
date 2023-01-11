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

    takeTurn(humanChoice) {
        if (this.name === 'human') {
            this.fighter = humanChoice;
        } else if (this.name === 'computer') {
            this.fighter = fighters[[Math.floor(Math.random() * fighters.length)]]
        }
    }
}