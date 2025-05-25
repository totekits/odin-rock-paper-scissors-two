/* create getComputerChoice()
to return rock, paper or scissors, 
using Math.random() */
function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice <= 0.33) {
    return `rock`;
  } else if (computerChoice <= 0.66) {
    return `paper`;
  } else {
    return `scissors`;
  }
}

/* create getHumanChoice()
using prompt() */
function getHumanChoice() {
  let humanChoice = prompt(`type rock, paper or scissors`)
  if (humanChoice === null) {
    return null;
  }
  if (humanChoice === `rock` || humanChoice === `paper` || humanChoice === `scissors`) {
    return humanChoice;
  } else { 
    alert(`wrong input, type again`);
    return getHumanChoice();
  }
}

console.log(getHumanChoice());
