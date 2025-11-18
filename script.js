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
