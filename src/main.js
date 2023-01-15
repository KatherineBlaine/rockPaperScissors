// Data model:
var classicFighters = ['rock', 'paper', 'scissors'];
var heroFighters = ['wanda', 'thor', 'captainMarvel', 'hulk', 'spiderman'];
var currentGame;

// DOM elements:

// Home page elements -
var gameTypeForm = document.getElementById('game-type-form')
var gameBoardHeading = document.getElementById('game-board-heading')
var selectorHeadings = document.querySelectorAll('.selector-headings')

// Game board elements -
var changeGameButton;
var classicGameBoard = document.getElementById('classic-game-board')
var difficultGameBoard = document.getElementById('difficult-game-board')
var chosenFightersClassic = document.getElementById('classic-fighter-choices')
var chosenFightersDifficult = document.getElementById('difficult-fighter-choices')
var fighterIcons = document.querySelectorAll('.fighter-icons')
var gameBoards = document.getElementById('game-boards')

// Sidebar Elements -
var compProfile = document.getElementById('comp-sidebar')
var humanProfile = document.getElementById('human-sidebar')

// Event listeners:
window.addEventListener('load', function() {
    currentGame = new Game()
    displayPlayerProfiles()})
gameTypeForm.addEventListener('click', function(event) {
    newGame(event)
    displayGameBoard()})
gameBoards.addEventListener('click', function(event){
    displayHumanFighter(event)
    displayCompFighter()
    displayFighterBoard()
    displayPlayerProfiles()
    setTimeout(resetBoard, 3000)
    })

// Event handlers:

function displayPlayerProfiles() {
   humanProfile.innerHTML = `
   <section class="win-counter" id="human-sidebar">
   <p>${currentGame.playerTwo.token}</p>
   <h2>${currentGame.playerTwo.name}</h2>
   <p id="human-win-counter">Wins: ${currentGame.playerTwo.wins}</p>
   <button class="change-game-button hidden" id="change-game-button">Change game mode</button></section>`
   compProfile.innerHTML =`
   <section class="win-counter" id="comp-sidebar"><p>${currentGame.playerOne.token}</p>
   <h2>${currentGame.playerOne.name}</h2>
   <p id="comp-win-counter">Wins: ${currentGame.playerOne.wins}</p>
   </section>`
   changeGameButton = document.getElementById('change-game-button');
   humanProfile.addEventListener('click', function(event){
    changeGameMode(event)
   })
}

function newGame(event) {
    if (event.target.parentNode.id === 'classic-selector') {
        currentGame.chooseGameMode('classic')
    } else if (event.target.parentNode.id === 'difficult-selector'){
        currentGame.chooseGameMode('difficult')
    }
}

function displayGameBoard() {
    if (currentGame.gameType === 'classic') {
        show(classicGameBoard)
        hide(gameTypeForm)
        show(changeGameButton)
        gameBoardHeading.innerText = 'Choose your fighter'
    } else if(currentGame.gameType === 'difficult'){
        show(difficultGameBoard)
        show(classicGameBoard)
        hide(gameTypeForm)
        show(changeGameButton)
        gameBoardHeading.innerText = 'Choose your fighter'
    }
}

function changeGameMode(event) {
    if (event.target.id === 'change-game-button' && currentGame.gameType === 'classic') {
        show(gameTypeForm)
        hide(classicGameBoard)
    } else if (event.target.id === 'change-game-button' && currentGame.gameType === 'difficult') {
        show(gameTypeForm)
        hide(difficultGameBoard)
    }
}

function displayFighterBoard() {
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
           chosenFightersClassic.innerHTML = `<section class="fighter-choice"> <p>${currentGame.playerTwo.token}</p> <img class="choice-icon" id="${event.target.id}"src="${event.target.src}" alt="${event.target.alt}">
           </section>`
           show(chosenFightersClassic)
        } else if (event.target.id === fighterIcons[i].id && currentGame.gameType === 'difficult'){
            chosenFightersDifficult.innerHTML = `<section class="fighter-choice"> <p>${currentGame.playerTwo.token}</p>
            <img class="choice-icon" id="${event.target.id}"src="${event.target.src}" alt="${event.target.alt}">
            </section>`
            show(chosenFightersDifficult)
        }
     }
    }
     
function displayCompFighter() {
    var computerChoice = currentGame.playerOne.fighter
    for (var i=0; i < fighterIcons.length; i++) {
        if (computerChoice === fighterIcons[i].id && currentGame.gameType === 'classic') {
            chosenFightersClassic.innerHTML += `<section class="fighter-choice"><p>${currentGame.playerOne.token}</p> <img class="choice-icon" id="${computerChoice}"src="./assets/${computerChoice}.png" alt="${computerChoice.alt}"></section>`
            show(chosenFightersClassic)
        } else if (computerChoice === fighterIcons[i].id && currentGame.gameType === 'difficult') {
            chosenFightersDifficult.innerHTML += `<section class="fighter-choice"><p>${currentGame.playerOne.token}</p> <img class="choice-icon" id="${computerChoice}"src="./assets/${computerChoice}.png" alt="${computerChoice.alt}"></section>`
            show(chosenFightersDifficult)
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
    show(changeGameButton)
    gameBoardHeading.innerText = 'Chose your fighter'
}

// Hide and Show functions:

function show(element) {
    element.classList.remove("hidden");
  };
  
  function hide(element) {
    element.classList.add("hidden");
  };