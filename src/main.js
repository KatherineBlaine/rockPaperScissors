var fighters = ['rock', 'paper', 'scissors']

var rockVScissors = 'rock' > 'scissors';
var scissorsVRock = 'scissors' > 'rock'
var scissorsVPaper = 'scissors' > 'paper';
var paperVScissors = 'paper' > 'scissors'
var rockVPaper = 'rock' > 'paper'
var paperVRock = 'paper' > 'rock';

scissorsVRock = false;
rockVScissors = true;
paperVScissors = false;
scissorsVPaper = true;
rockVPaper = false;
paperVRock = true;

var game1 = new Game();