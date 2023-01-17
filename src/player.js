class Player {
    constructor(name) {
        this.wins = 0;
        if (name === 'computer') {
            this.token = '🖥';
            this.name = name;
        } else {
            this.name = nameValue;
            this.token = tokenValue;
        }
    }

    takeTurn(humanChoice, compArray) {
       if (this.name === 'computer') {
            this.fighter = compArray[[Math.floor(Math.random() * compArray.length)]];
        } else {
            this.fighter = humanChoice;
        }
    }
}