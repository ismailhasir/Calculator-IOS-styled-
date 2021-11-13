"use strict";
//Creating a function which creates a randomized answers for computer.
const computerPlay = () => {
  let randomNum = Math.trunc(Math.random() * 2) + 1;
  if (randomNum === 0) {
    return "ROCK";
  } else if (randomNum === 1) {
    return "PAPER";
  } else if (randomNum === 2) {
    return "SCISSORS";
  }
};

//Starting Conditions
let scorePlayer = 0;
let scoreComputer = 0;
let computerSelection = computerPlay();

//Taking a value from the user.
let playerSelection = window
  .prompt("Pick Rock,Paper or Scissors")
  .toUpperCase();

//We are creating the GAME LOGIC
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    scorePlayer++;
    return "You win! Rock beats Scissors!";
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    scorePlayer++;
    return "You win! Paper beats Rock!";
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    scorePlayer++;
    return "You win! Scissors beats Paper!";
  } else if (playerSelection === computerSelection) {
    return "Draw!";
  } else {
    scoreComputer++;
    return `You lost! ${computerSelection} beats ${playerSelection} `;
  }
};

console.log(playRound(playerSelection, computerSelection));

//Play the game five times, and declare the winner.
/*const game = () => {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
  }
  if (scorePlayer > scoreComputer) {
    console.log(
      `Player WON the game against Computer by ${scorePlayer} vs ${scoreComputer}`
    );
  } else {
    console.log(
      `Player LOST the game against computer by ${scoreComputer} vs ${scorePlayer}`
    );
  }
};

game(); */
