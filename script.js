let playerScore = 0
let computerScore = 0

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const resultSpan = document.querySelector("span#result");
const playerScoreSpan = document.querySelector("span#player-score");
const computerScoreSpan = document.querySelector("span#computer-score");
const resultHeading = document.querySelector("#result-heading");
const resultsDiv = document.querySelector(".results");

// creates the "play again" button in memory, doesn't render it yet
const again = document.createElement("button");
again.classList.add("again-button");
again.textContent = "Play again";

// function that executes one game
function game() {
  rockButton.addEventListener("click", oneRound);
  paperButton.addEventListener("click", oneRound);
  scissorsButton.addEventListener("click", oneRound);

  playerScore = 0;
  computerScore = 0;

  resultSpan.textContent = "";
  playerScoreSpan.textContent = "Player score: 0";
  computerScoreSpan.textContent = "Computer score: 0";
  resultHeading.textContent = "";
  resultsDiv.removeChild(again);
}
game();

function getComputerChoice() {
  let choice = Math.floor(Math.random() * (3 - 1 + 1) ) + 1
  if (choice === 1) return "rock";
  else if (choice === 2) return "paper";
  else return "scissors";
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    resultSpan.textContent = "It's a tie!";
  }
  else if ((playerSelection === "rock" && computerSelection === "paper") || 
  (playerSelection === "paper" && computerSelection === "scissors") ||
  (playerSelection === "scissors" && computerSelection === "rock")) {
    computerScore++;
    resultSpan.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
  }
  else {
    playerScore++
    resultSpan.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
  }
}

// updates the score, stops the game if neccessary
function updateScore() {
  playerScoreSpan.textContent = `Player score: ${playerScore}`;
  computerScoreSpan.textContent = `Computer score: ${computerScore}`;

  if (playerScore === 5) {
    resultHeading.textContent = "The player has won!";
    stopGame();
  }
  if (computerScore === 5) {
    resultHeading.textContent = "The computer has won!";
    stopGame();
  }
}

// removes the event listeners, renders the "play again" button - if clicked, new game begins
function stopGame() {
  rockButton.removeEventListener("click", oneRound);
  paperButton.removeEventListener("click", oneRound);
  scissorsButton.removeEventListener("click", oneRound);
  
  resultsDiv.appendChild(again);

  again.addEventListener("click", game)
}

function oneRound(e) {
  symbol = e.target.getAttribute("id")
  playRound(symbol, getComputerChoice());
  updateScore();
}
