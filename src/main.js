// Data model:
var classicFighters = ['rock', 'paper', 'scissors'];
var heroFighters = ['wanda', 'thor', 'captainMarvel', 'hulk', 'spiderman'];
var currentGame;

// DOM elements:

// Home page elements -
var gameTypeForm = document.getElementById('game-type-form')
var gameBoardHeading = document.getElementById('game-board-heading')

// Game board elements -
var classicGameBoard = document.getElementById('classic-game-board')
var difficultGameBoard = document.getElementById('difficult-game-board')
var navButtons = document.getElementById('nav')
var changeGameButton = document.getElementById('change-game-button')
var chosenFightersClassic = document.getElementById('classic-fighter-choices')
var chosenFightersDifficult = document.getElementById('difficult-fighter-choices')

// Sidebar Elements -
var compWinCount = document.getElementById('comp-win-counter');
var humanWinCount = document.getElementById('human-win-counter');

// Test variables:
var fighterIcons = document.querySelectorAll('.fighter-icons')
var gameBoards = document.getElementById('game-boards')


// Event listeners:
gameTypeForm.addEventListener('click', function(event) {
    newGame(event)
    displayGameBoard()})
changeGameButton.addEventListener('click', changeGameMode)
gameBoards.addEventListener('click', function(event){
    displayHumanFighter(event)
    displayCompFighter()
    displayFighterBoard()
    updateWinCount()
    setTimeout(resetBoard, 3000)
    })

// Event handlers:
function newGame(event) {
    if (event.target.parentNode.id === 'classic-selector') {
        currentGame = new Game('classic');
    } else if (event.target.parentNode.id === 'difficult-selector'){
        currentGame = new Game('difficult');
    }
}

function displayGameBoard() {
    if (currentGame.gameType === 'classic') {
        show(classicGameBoard)
    } else {
        show(difficultGameBoard)
    }
    show(navButtons)
    hide(gameTypeForm)
    gameBoardHeading.innerText = 'Choose your fighter'
}

function changeGameMode() {
    if (currentGame.gameType === 'classic') {
        show(gameTypeForm)
        hide(classicGameBoard)
    } else {
        show(gameTypeForm)
        hide(difficultGameBoard)
    }
}

function displayFighterBoard() {
    hide(navButtons)
    if (currentGame.gameType === 'classic') {
        hide(classicGameBoard)
    } else {
        hide(difficultGameBoard)
    }
}

function displayHumanFighter(event) {
    currentGame.createGameBoard(event.target.id)
    for (var i=0; i < fighterIcons.length; i++) {
        if (event.target.id === fighterIcons[i].id && currentGame.gameType === 'classic') {
           chosenFightersClassic.innerHTML = `<img class="fighter-choice" id="${event.target.id}"src="${event.target.src}" alt="${event.target.alt}">`
           show(chosenFightersClassic)
        } else if (event.target.id === fighterIcons[i].id && currentGame.gameType === 'difficult'){
            chosenFightersDifficult.innerHTML = `<img class="fighter-choice" id="${event.target.id}"src="${event.target.src}" alt="${event.target.alt}">`
            show(chosenFightersDifficult)
        }
     }
    }
     
function displayCompFighter() {
    var computerChoice = currentGame.playerOne.fighter
    for (var i=0; i < fighterIcons.length; i++) {
        if (computerChoice === fighterIcons[i].id && currentGame.gameType === 'classic') {
            chosenFightersClassic.innerHTML += `<img class="fighter-choice" id="${computerChoice}"src="./assets/${computerChoice}.png" alt="${computerChoice.alt}">`
        } else if (computerChoice === fighterIcons[i].id && currentGame.gameType === 'difficult') {
            chosenFightersDifficult.innerHTML += `<img class="fighter-choice" id="${computerChoice}"src="./assets/${computerChoice}.png" alt="${computerChoice.alt}">`
        }
     }
    gameBoardHeading.innerText = `${currentGame.playGame()}` 
}

function updateWinCount() {
    compWinCount.innerText = `Wins: ${currentGame.playerOne.wins}`
    humanWinCount.innerText = `Wins: ${currentGame.playerTwo.wins}`
}

function resetBoard() {
    if (currentGame.gameType === 'classic') {
        hide(chosenFightersClassic)
        show(classicGameBoard)
    } else if (currentGame.gameType === 'difficult') {
        hide(chosenFightersDifficult)
        show(difficultGameBoard)
    }
    show(navButtons)
    gameBoardHeading.innerText = 'Chose your fighter'

// Hide and Show functions:

function show(element) {
    element.classList.remove("hidden");
  };
  
  function hide(element) {
    element.classList.add("hidden");
  };