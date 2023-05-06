let playerScore = 0
let computerScore = 0

function getComputerChoice() {
  let choice = Math.floor(Math.random() * (3 - 1 + 1) ) + 1
  if (choice === 1) return "rock"
  else if (choice === 2) return "paper"
  else return "scissors"
}

function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === computerSelection) {
    return "It's a tie!"
  }
  else if ((playerSelection === "rock" && computerSelection === "paper") || 
  (playerSelection === "paper" && computerSelection === "scissors") ||
  (playerSelection === "scissors" && computerSelection === "rock")) {
    computerScore++
    return `You lose! ${computerSelection} beats ${playerSelection}!`
  }
  else {
    playerScore++
    return `You win! ${playerSelection} beats ${computerSelection}!`
  }
}

function checkForSymbol(playerSelection) {
  playerSelection = playerSelection.toLowerCase()
  if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") return true
  else false
}

function game() {
  for (let i = 0; i < 5; i ++) {
    let playerSelection
    while (true) {
      playerSelection = prompt("Select a symbol")
      if (checkForSymbol(playerSelection)) break
    }
      
    const computerSelection = getComputerChoice()
    let result = playRound(playerSelection, computerSelection)
    console.log(result)
  }
  if (playerScore > computerScore) console.log("The player has won!")
  else if (computerScore > playerScore) console.log("The computer has won!")
  else console.log("The match is a tie!")
}
game()