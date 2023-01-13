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

// Test variables:
var fighterIcons = document.querySelectorAll('.fighter-icons')


// Event listeners:
gameTypeForm.addEventListener('click', function() {
    selectGame(event)})
changeGameButton.addEventListener('click', changeGameMode)
classicGameBoard.addEventListener('click', function(event){
    displayHumanFighter(event)
    displayCompFighter()
    currentGame.playGame()})

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

function displayHumanFighter(event) {
    currentGame.createGameBoard(event.target.id)
    for (var i=0; i < fighterIcons.length; i++) {
        if (event.target.id === fighterIcons[i].id) {
            event.target.parentNode.innerHTML = `<img class ="fighter-choice" id="${event.target.id}"src="${event.target.src}" alt="${event.target.alt}">`
        }
     }
    }
     
function displayCompFighter() {
    var computerChoice = currentGame.playerOne.fighter
    for (var i=0; i < fighterIcons.length; i++) {
        if (computerChoice === fighterIcons[i].id) {
            classicGameBoard.innerHTML += `<img class ="fighter-choice" id="${computerChoice}"src="./assets/${computerChoice}.png" alt="${computerChoice.alt}">`
        }
     }
}

// Hide and Show functions:

function show(element) {
    element.classList.remove("hidden");
  };
  
  function hide(element) {
    element.classList.add("hidden");
  };