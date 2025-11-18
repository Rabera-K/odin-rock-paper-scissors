"use strict";

// game of rock paper scissors between computer and human....

// 1.computer choice logic....
const getComputerChoice = function () {
  let shoot = Math.trunc(Math.random() * 3) + 1;
  if (shoot === 1) {
    return "rock";
  } else if (shoot === 2) {
    return "paper";
  } else if (shoot === 3) {
    return "scissors";
  }
};
console.log(getComputerChoice());

// 2.human choice logic...
const getHumanChoice = function () {
  let shoot = prompt("rock, paper or scissors");
  return shoot.toLowerCase();
};
getHumanChoice();
// console.log(getHumanChoice());

// 3.players score variables
let computerScore = 0;
let humanScore = 0;

// 4.write the logic to play a single round
const playRound = function (humanChoice, computerChoice) {
  const humanWins =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock");

  if (humanChoice === computerChoice) {
    console.log(`It's a tie!! You both chose ${humanChoice}`);
  } else if (humanWins) {
    console.log(`🤪You win ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`🫣You lose ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  console.log(`score -> You: ${humanScore} | Computer:${computerScore}`);
};

const playGame = function () {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log("🎉 You win the match!");
  } else if (computerScore > humanScore) {
    console.log("💀 Computer wins the match!");
  } else {
    console.log("🤝 The match is a tie!");
  }
};

playGame();
