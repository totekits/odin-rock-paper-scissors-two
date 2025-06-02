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

const humanScoreboard = document.querySelector(`.humanScore`);
humanScoreboard.textContent = `Human score: ${humanScore}`;

const computerScoreboard = document.querySelector(`.computerScore`);
computerScoreboard.textContent = `Computer score: ${computerScore}`;

const scoreboard = document.querySelector(`.scoreboard`);
/* write the logic to play a single round */
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    scoreboard.textContent = `It's a draw!`;
  } else if (humanChoice === `rock` && computerChoice === `scissors`) {
    scoreboard.textContent = `You win! Rock beats Scissors`;
    humanScore++;
  } else if (humanChoice === `paper` && computerChoice === `rock`) {
    scoreboard.textContent = `You win! Paper beats Rock`;
    humanScore++;
  } else if (humanChoice === `scissors` && computerChoice === `paper`) {
    scoreboard.textContent = `You win! Scissors beats Paper`;
    humanScore++;
  } else if (humanChoice === `rock` && computerChoice === `paper`) {
    scoreboard.textContent = `You lose! Paper beats Rock`;
    computerScore++;
  } else if (humanChoice === `paper` && computerChoice === `scissors`) {
    scoreboard.textContent = `You lose! Scissors beats Paper`;
    computerScore++;
  } else if (humanChoice === `scissors` && computerChoice === `rock`) {
    scoreboard.textContent = `You lose! Rock beats Scissors`;
    computerScore++;
  } else if (humanChoice === null) {
    scoreboard.textContent = `Game cancelled`;
    return;
  }
}

const buttonRock = document.querySelector(`.rock`);
buttonRock.addEventListener(`click`, () => {
  playRound(`rock`, getComputerChoice());
  updateScoreboard();
});

const buttonPaper = document.querySelector(`.paper`);
buttonPaper.addEventListener(`click`, () => {
  playRound(`paper`, getComputerChoice());
  updateScoreboard();
});

const buttonScissors = document.querySelector(`.scissors`);
buttonScissors.addEventListener(`click`, () => {
  playRound(`scissors`, getComputerChoice());
  updateScoreboard();
});

function updateScoreboard() {
  humanScoreboard.textContent = `Human score: ${humanScore}`;
  computerScoreboard.textContent = `Computer score: ${computerScore}`;

  if (humanScore === 5) {
  scoreboard.textContent = `Game over — You win!`;
  disableButtons();
  } else if (computerScore === 5) {
  scoreboard.textContent = `Game over — You lose!`; 
  disableButtons();
  }
}

function disableButtons() {
  buttonRock.disabled = true;
  buttonPaper.disabled = true;
  buttonScissors.disabled = true;
}