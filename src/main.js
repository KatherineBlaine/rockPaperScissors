// Data model:
var classicFighters = ['rock', 'paper', 'scissors'];
var heroFighters = ['wanda', 'thor', 'captainMarvel', 'hulk', 'spiderman'];
var currentGame;
var currentGameMode;

// DOM elements:

var gameTypeForm = document.getElementById('game-type-form');
var gameBoardHeading = document.getElementById('game-board-heading');
var compProfile = document.getElementById('comp-sidebar');
var humanProfile = document.getElementById('human-sidebar');

var changeGameButton;
var classicGameBoard = document.getElementById('classic-game-board');
var difficultGameBoard = document.getElementById('difficult-game-board');
var chosenFighters = document.getElementById('fighter-choices');
var chosenFightersDifficult = document.getElementById('difficult-fighter-choices');
var fighterIcons = document.querySelectorAll('.fighter-icons');
var gameBoards = document.getElementById('game-boards');

// Event listeners:
window.addEventListener('load', function() {
    currentGame = new Game();
    displayPlayerProfiles()
});
gameTypeForm.addEventListener('click', function(event) {
    newGame(event)
});
gameBoards.addEventListener('click', function(event){
    displayHumanFighter(event);
    displayCompFighter(event);
    displayFighterBoard(event);
    displayPlayerProfiles();
    show(changeGameButton)
 });

// Event handlers and functions:
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
   </section>`;
   changeGameButton = document.getElementById('change-game-button');
   humanProfile.addEventListener('click', function(event){
    showGameModeList(event);
   })
}

function show(element) {
    element.classList.remove("hidden");
  };
  
  function hide(element) {
    element.classList.add("hidden");
  };

function newGame(event) {
    var eventClass = event.target.className;
    if (eventClass.includes('classic')) {
        currentGameMode = currentGame.chooseGameMode('classic');
        show(classicGameBoard);
        hide(gameTypeForm);
        show(changeGameButton);
        gameBoardHeading.innerText = 'Choose your fighter';
    } else if (eventClass.includes('difficult')) {
        currentGameMode = currentGame.chooseGameMode('difficult');
        show(difficultGameBoard);
        hide(gameTypeForm);
        show(changeGameButton);
        gameBoardHeading.innerText = 'Choose your fighter';
    }
    return currentGameMode;
}

function showGameModeList(event) {
    if (event.target.id === 'change-game-button' && currentGameMode === 'classic') {
        show(gameTypeForm);
        hide(classicGameBoard);
    } else if (event.target.id === 'change-game-button' && currentGameMode === 'difficult') {
        show(gameTypeForm);
        hide(difficultGameBoard);
    }
}

function displayFighterBoard(event) {
    if (currentGame.gameType === 'classic' && event.target.className === 'fighter-icons') {
        hide(classicGameBoard);
    } else if (currentGame.gameType === 'difficult' && event.target.className === 'fighter-icons'){
        hide(difficultGameBoard);
    }
}

function displayHumanFighter(event) {
    currentGame.createGameBoard(event.target.id);
    for (var i=0; i < fighterIcons.length; i++ ) {
        if (event.target.id === fighterIcons[i].id && event.target.className === 'fighter-icons') {
           chosenFighters.innerHTML = `<section class="fighter-choice"> <p>${currentGame.playerTwo.token}</p> <img class="choice-icon" id="${event.target.id}"src="${event.target.src}" alt="${event.target.alt}"></section>`;
           show(chosenFighters);
        } 
    }
}
     
function displayCompFighter(event) {
    var computerChoice = currentGame.playerOne.fighter;
    for (var i=0; i < fighterIcons.length; i++) {
        if (computerChoice === fighterIcons[i].id && event.target.className === 'fighter-icons') {
            chosenFighters.innerHTML += `<section class="fighter-choice"><p>${currentGame.playerOne.token}</p> <img class="choice-icon" id="${computerChoice}"src="./assets/${computerChoice}.png" alt="${computerChoice.alt}"></section>`
            show(chosenFighters);
            gameBoardHeading.innerText = `${currentGame.playGame()}`;
            setTimeout(resetBoard, 1500);
        }
     }
}

function updateWinCount() {
    compWinCount.innerText = `Wins: ${currentGame.playerOne.wins}`;
    humanWinCount.innerText = `Wins: ${currentGame.playerTwo.wins}`;
}

function resetBoard() {
    if (currentGame.gameType === 'classic') {
        hide(chosenFighters);
        show(classicGameBoard);
    } else if (currentGame.gameType === 'difficult') {
        hide(chosenFighters);
        show(difficultGameBoard);
    }
    show(changeGameButton)
    gameBoardHeading.innerText = 'Choose your fighter';
}