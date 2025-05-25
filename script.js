/* create function getComputerChoice
to return rock, paper or scissors, 
using Math.random */
function getComputerChoice() {
  let choice = Math.random();
  if (choice <= 0.33) {
    return `rock`;
  } else if (choice <= 0.66) {
    return `paper`;
  } else {
    return `scissors`;
  }
}

console.log(getComputerChoice());