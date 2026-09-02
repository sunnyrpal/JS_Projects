const prompt = require("prompt-sync")();

let won = 0;
let losses = 0;
let tie = 0;

const choices = ["rock", "paper", "scissor"];

while (true) {
  const input = prompt("rock paper scissor (or 'q' to quit): ");

  if (!input) continue;

  const playerChoice = input.trim().toLowerCase();

  if (playerChoice === "q") {
    break;
  }

  if (!choices.includes(playerChoice)) {
    console.log("enter a valid choice");
    continue;
  }

  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];
  console.log("the computer chose", computerChoice);

  if (computerChoice === playerChoice) {
    console.log("draw");
    tie++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissor") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissor" && computerChoice === "paper")
  ) {
    console.log("won");
    won++;
  } else {
    console.log("loss")
    losses++
  }
}

console.log(`\nFinal Score -> Won: ${won} | Losses: ${losses} | Ties: ${tie}`);