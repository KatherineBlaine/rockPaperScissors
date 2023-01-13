var classicFighters = ['rock', 'paper', 'scissors'];
var heroFighters = ['Wanda', 'Thor', 'Captain Marvel', 'Hulk', 'Spiderman'];
var currentGame;

// DOM elements:

// central game board

var classicSelector = document.getElementById('classic-version-heading');
var difficultSelector = document.getElementById('difficult-version-heading');
var gameTypeForm = document.getElementById('game-type-form')
var gameBoardHeading = document.getElementById('game-board-heading')
var gameBoard = document.getElementById('game-board')

var versionSelector = document.getElementById('game-type-form')

// classic game board
var classicGameBoard = document.getElementById('classic-game-board')

// difficult
var difficultGameBoard = document.getElementById('difficult-game-board')

var navButtons = document.getElementById('nav')
var changeGameButton = document.getElementById('change-game-button')

// Sidebar Elements:
var compWinCount = document.getElementById('comp-win-counter');
var humanWinCount = document.getElementById('human-win-counter');

// Event listeners:

classicSelector.addEventListener('click', selectClassic)
difficultSelector.addEventListener('click', selectDifficult)
changeGameButton.addEventListener('click', changeGameMode)

// Event handlers:

function selectClassic() {
    hide(gameTypeForm)
    show(classicGameBoard)
    show(navButtons)
    currentGame = 'classic'
    gameBoardHeading.innerText = 'Choose your fighter'
};

function selectDifficult() {
    hide(gameTypeForm)
    show(difficultGameBoard)
    show(navButtons)
    currentGame = 'difficult'
    gameBoardHeading.innerText = 'Choose your fighter'
};

function changeGameMode() {
    if (currentGame === 'classic') {
        console.log('hello')
        show(gameTypeForm)
        hide(classicGameBoard)
    } else {
        show(gameTypeForm)
        hide(difficultGameBoard)
    }
}



// Hide and Show functions:

function show(element) {
    element.classList.remove("hidden");
  };
  
  function hide(element) {
    element.classList.add("hidden");
  };


// Test Game on Data Model code:
// var game1 = new Game('classic')
// var game2 = new Game('difficult')

// game1.createGameBoard('scissors')
// console.log(game1.gameBoard)
// game1.playGame()
// console.log('player1 fighter:', game1.playerOne.fighter)
// console.log('player2 fighter:', game1.playerTwo.fighter)
// console.log('player1 wins:' ,game1.playerOne.wins)
// console.log('player2 wins:', game1.playerTwo.wins)

// game2.createGameBoard('Wanda')
// console.log(game2.gameBoard)
// game2.playGame()
// console.log('player1 fighter:', game2.playerOne.fighter)
// console.log('player2 fighter:', game2.playerTwo.fighter)
// console.log('player1 wins:' ,game2.playerOne.wins)
// console.log('player2 wins:', game2.playerTwo.wins)