var classicFighters = ['rock', 'paper', 'scissors'];
var heroFighters = ['Wanda', 'Thor', 'Captain Marvel', 'Hulk', 'Spiderman'];

// DOM elements:

// central game board

var classicSelector = document.getElementById('version-selector-classic');
var difficultSelector = document.getElementById('version-selector-difficult');
var gameTypeForm = document.getElementById('game-type-form')
var chooseGameHeading = document.getElementById('choose-game-heading')

// classic game board
var classicGameBoard = document.getElementById('classic-game-board')

// difficult
var difficultGameBoard = document.getElementById('difficult-game-board')

// Sidebar Elements:
var compWinCount = document.getElementById('comp-win-counter');
var humanWinCount = document.getElementById('human-win-counter');


// Hide and Show functions:

function show(element) {
    element.classList.remove("hidden");
  };
  
  function hide(element) {
    element.classList.add("hidden");
  };

  hide(gameTypeForm)
  hide(chooseGameHeading)
  show(difficultGameBoard)


// Test Game on Data Model code:
var game1 = new Game('classic')
var game2 = new Game('difficult')

game1.createGameBoard('scissors')
console.log(game1.gameBoard)
game1.playGame()
console.log('player1 fighter:', game1.playerOne.fighter)
console.log('player2 fighter:', game1.playerTwo.fighter)
console.log('player1 wins:' ,game1.playerOne.wins)
console.log('player2 wins:', game1.playerTwo.wins)

game2.createGameBoard('Wanda')
console.log(game2.gameBoard)
game2.playGame()
console.log('player1 fighter:', game2.playerOne.fighter)
console.log('player2 fighter:', game2.playerTwo.fighter)
console.log('player1 wins:' ,game2.playerOne.wins)
console.log('player2 wins:', game2.playerTwo.wins)