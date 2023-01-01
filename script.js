var choice = ["rock", "paper", "scissors"];

function getComputerChoice(choice) {
  return choice[Math.floor(Math.random() * choice.length)];

}



function playRound(playerSelection, computerSelection) {

  let value = null;

  if (playerSelection == "rock" && computerSelection == "rock") {
    value = "Tie!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    value = "You Lose!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    value = "You Win!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    value = "You Win!";
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    value = "Tie!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    value = "You Lose!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    value = "You Lose!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    value = "You Win!";
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    value = "Tie!";
  } else {
    value = "Unknown variable entered";
  }
  return value;

}

function game() {
    
    var playerScore = 0;
    var computerScore = 0;
    var result;
    var rounds = 5;

    for (i = 0; i < rounds; i++) {
        var choices = prompt("Rock, Paper, or Scissors");
        var playerSelection = choices.toLowerCase();
        var computerSelection = getComputerChoice(choice);
        result = playRound(playerSelection, computerSelection);

        var a = "You Win!";
        var b = "You Lose!";
        var c = "Tie!";
        var d = "Unknown variable entered";

        if (result === a) {
            playerScore++;
        } else if (result === b) {
            computerScore++;
        } else if (result === c) {
            console.log("Tie!");
        }
    }

    alert("Player Score: " + playerScore + "\nComputer Score: " + computerScore);
    
    if (playerScore > computerScore) {
    alert("You Win!");
    }
    else if (computerScore > playerScore) {
    alert("You Lose!");
    }
    else {
    alert("Tie!");
    }

}

console.log(game());