// Data model:
var classicFighters = ['rock', 'paper', 'scissors'];
var heroFighters = ['Wanda', 'Thor', 'Captain Marvel', 'Hulk', 'Spiderman'];
var currentGame;

// DOM elements:

// Home page elements -
var gameTypeForm = document.getElementById('game-type-form')
var gameBoardHeading = document.getElementById('game-board-heading')
var gameBoard = document.getElementById('game-board')
var versionSelector = document.getElementById('game-type-form')

// Game board elements -
var classicGameBoard = document.getElementById('classic-game-board')
var difficultGameBoard = document.getElementById('difficult-game-board')
var navButtons = document.getElementById('nav')
var changeGameButton = document.getElementById('change-game-button')

// Sidebar Elements -
var compWinCount = document.getElementById('comp-win-counter');
var humanWinCount = document.getElementById('human-win-counter');

// Event listeners:
gameTypeForm.addEventListener('click', function() {
    selectGame(event)})
changeGameButton.addEventListener('click', changeGameMode)

// Event handlers:
function selectGame(event) {
        if (event.target.parentNode.className === 'version-selector-classic') {
            currentGame = new Game('classic');
            hide(gameTypeForm)
            show(classicGameBoard)
            show(navButtons)
        } else if (event.target.parentNode.className === 'version-selector-difficult'){
            currentGame = new Game('difficult');
            hide(gameTypeForm)
            show(difficultGameBoard)
            show(navButtons)
    }
    gameBoardHeading.innerText = 'Choose your fighter'
}

function changeGameMode() {
   var currentGameMode = currentGame.gameType
    if (currentGameMode === 'classic') {
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