/* create getComputerChoice()
to return rock, paper or scissors, 
using Math.random() */
function getComputerChoice() {
  let num = Math.random();
  if (num <= 0.33) {
    return `rock`;
  } else if (num <= 0.66) {
    return `paper`;
  } else {
    return `scissors`;
  }
}

/* create getHumanChoice()
using prompt() */
function getHumanChoice() {
  let input = prompt(`type rock, paper or scissors`)
  if (input === null) {
    return null;
  }
  input = input.toLowerCase().trim();
  if (input === `rock` || input === `paper` || input === `scissors`) {
    return input;
  } else { 
    alert(`wrong input, type again`);
    return getHumanChoice();
  }
}

/* create humanScore and computerScore
to keep track of the players score */
let humanScore = 0;
let computerScore = 0;

/* write the logic to play a single round */
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a draw!`);
  } else if (humanChoice === `rock` && computerChoice === `scissors`) {
    console.log(`You win! Rock beats Scissors`);
    humanScore++;
  } else if (humanChoice === `paper` && computerChoice === `rock`) {
    console.log(`You win! Paper beats Rock`)
    humanScore++;
  } else if (humanChoice === `scissors` && computerChoice === `paper`) {
    console.log(`You win! Scissors beats Paper`)
    humanScore++;
  } else if (humanChoice === `rock` && computerChoice === `paper`) {
    console.log(`You lose! Paper beats Rock`);
    computerScore++;
  } else if (humanChoice === `paper` && computerChoice === `scissors`) {
    console.log(`You lose! Scissors beats Paper`)
    computerScore++;
  } else if (humanChoice === `scissors` && computerChoice === `rock`) {
    console.log(`You lose! Rock beats Scissors`)
    computerScore++;
  } else if (humanChoice === null) {
    console.log(`Game cancelled`);
    return;
  }
}

/* write the logic to play the entire game */
function playGame() {
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(`Final Score => Human: ${humanScore} Computer: ${computerScore}`);
  if (humanScore === computerScore) {
    console.log(`It's a draw!`);
  } else if (humanScore > computerScore) {
    console.log(`You win!`);
  } else {
    console.log(`You lose!`);
  }
  humanScore = 0;
  computerScore = 0;
}

playGame()