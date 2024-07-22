const playerArea = document.querySelector(".player-area");
const playerHandImg = document.querySelector("#player-hand");
const computerHandImg = document.querySelector("#computer-hand");
const choiceImages = document.querySelectorAll(".choices > img");
const choicesContainer = document.querySelector(".choices");
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");
const restartSection = document.querySelector(".restart");
const handOptions = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

// Getting input from user
choiceImages.forEach((choice) => {
  choice.addEventListener("click", () => handlePlayerChoice(choice.alt));
});

// Processing input
function handlePlayerChoice(choice) {
  playerHandImg.src = `assets/${choice}-hand.png`;
  const computerChoice = handOptions[Math.floor(Math.random() * 3)];
  updateComputerHand(computerChoice);
  evaluateChoices(choice, computerChoice);
}

// Generating random hand image for AI
function updateComputerHand(hand) {
  computerHandImg.src = `assets/${hand}-hand.png`;
}

function evaluateChoices(playerChoice, computerChoice) {
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScoreSpan.textContent = ++playerScore;
  } else if (playerChoice !== computerChoice) {
    computerScoreSpan.textContent = ++computerScore;
  }
  checkGameOver(playerScoreSpan.textContent, computerScoreSpan.textContent);
}

function checkGameOver(player, computer) {
  if (player === "5" || computer === "5") {
    choicesContainer.style.visibility = "hidden";
    restartSection.style.visibility = "visible";
  }
}

const restartButton = document.querySelector(".restart-button");
restartButton.onclick = () => {
  window.location.href = "game.html";
};