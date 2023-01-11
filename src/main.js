var classicFighters = ['rock', 'paper', 'scissors']
var heroFighters = ['Wanda', 'Thor', 'Captain Marvel', 'Hulk', 'Spiderman']

var game1 = new Game('classic')
var game2 = new Game('difficult')

// game1.createGameBoard('scissors')
// console.log(this.gameBoard)
// game1.playGame()
// console.log('player1 fighter:', game1.playerOne.fighter)
// console.log('player2 fighter:', game1.playerTwo.fighter)
// console.log('player1 wins:' ,game1.playerOne.wins)
// console.log('player2 wins:', game1.playerTwo.wins)

game2.createGameBoard('Wanda')
console.log(this.gameBoard)
game2.playGame()
console.log('player1 fighter:', game2.playerOne.fighter)
console.log('player2 fighter:', game2.playerTwo.fighter)
console.log('player1 wins:' ,game2.playerOne.wins)
console.log('player2 wins:', game2.playerTwo.wins)