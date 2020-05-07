/**
 * Given player input, performes entire game sequence
 * @param {string} playerInput
 */

function play(playerInput) {
  let gameOutcome = calculateGame(playerInput);
  drawGame(gameOutcome);
}

/**
 * Given the player input, calculates the game interaction between computer and player
 * @param {string} playerInput
 */

function calculateGame(playerInput) {
  let computerInput = generateComputerInput();
  let gameOutcome = compareInputs(playerInput, computerInput);
  return gameOutcome;
}

/**
 * Generates computer's choice
 */

function generateComputerInput() {
  let randomChoice = Math.floor(Math.random() * 5 + 1);
  console.log(randomChoice);
  let computerInput = "";
  if (randomChoice == 1) {
    computerInput = "Rock";
  } else if (randomChoice == 2) {
    computerInput = "Paper";
  } else if (randomChoice == 3) {
    computerInput = "Scissors";
  } else if (randomChoice == 4) {
    computerInput = "Spock";
  } else {
    computerInput = "Lizard";
  }
  return computerInput;
}

function compareInputs(playerInput, computerInput) {
  let gameOutcome = {};
  gameOutcome.playerInput = playerInput;
  gameOutcome.computerInput = computerInput;

  if (
    (playerInput == "Rock" &&
      (computerInput == "Scissors" || computerInput == "Lizard")) ||
    (playerInput == "Paper" &&
      (computerInput == "Rock" || computerInput == "Spock")) ||
    (playerInput == "Scissors" &&
      (computerInput == "Paper" || computerInput == "Lizard")) ||
    (playerInput == "Spock" &&
      (computerInput == "Scissors" || computerInput == "Rock")) ||
    (playerInput == "Lizard" &&
      (computerInput == "Spock" || computerInput == "Paper"))
  ) {
    gameOutcome.winner = "Player";
  } else if (playerInput == computerInput) {
    gameOutcome.winner = "Tie";
  } else {
    gameOutcome.winner = "Computer";
  }
  return gameOutcome;
}

function drawGame(gameOutcome) {
  postChoice(gameOutcome.playerInput, true);
  postChoice(gameOutcome.computerInput, false);
  postImage(gameOutcome.playerInput, true);
  postImage(gameOutcome.computerInput, false);
  postActionText(gameOutcome);
  changeActionTextColor(gameOutcome.winner);
  changeArrowColor(gameOutcome.winner);
  winScreen(gameOutcome.winner);
}

function postChoice(Input, player) {
  let cardTitle;
  if (player) {
    cardTitle = document.querySelector("#player-card-title");
  } else {
    cardTitle = document.querySelector("#computer-card-title");
  }
  cardTitle.textContent = Input;
}

function postImage(input, player) {
  let imageAttribute;
  if (player) {
    imageAttribute = document.getElementById("playerImage");
  } else {
    imageAttribute = document.getElementById("computerImage");
  }
  if (input == "Rock") {
    imageAttribute.src = "rock.jpg";
  } else if (input == "Paper") {
    imageAttribute.src = "paper.jpg";
  } else if (input == "Scissors") {
    imageAttribute.src = "scissors.jpg";
  } else if (input == "Spock") {
    imageAttribute.src = "spock.jpg";
  } else {
    imageAttribute.src = "lizard.jpg";
  }
}

function postActionText(gameOutcome) {
  let choiceArray = [gameOutcome.playerInput, gameOutcome.computerInput];
  let actionTextElem = document.getElementById("action-text");

  if (choiceArray.includes("Scissors") && choiceArray.includes("Paper")) {
    actionTextElem.innerText = "Scissors cuts Paper";
  } else if (
    choiceArray.includes("Scissors") &&
    choiceArray.includes("Lizard")
  ) {
    actionTextElem.innerText = "Scissor decapitates lizard";
  } else if (choiceArray.includes("Paper") && choiceArray.includes("Spock")) {
    actionTextElem.innerText = "Paper disproves Spock";
  } else if (choiceArray.includes("Paper") && choiceArray.includes("Rock")) {
    actionTextElem.innerText = "Paper covers Rock";
  } else if (choiceArray.includes("Rock") && choiceArray.includes("Scissors")) {
    actionTextElem.innerText = "Rock crushes Scissors";
  } else if (choiceArray.includes("Rock") && choiceArray.includes("Lizard")) {
    actionTextElem.innerText = "Rock crushes Lizard";
  } else if (choiceArray.includes("Lizard") && choiceArray.includes("Paper")) {
    actionTextElem.innerText = "Lizard eats Paper";
  } else if (choiceArray.includes("Lizard") && choiceArray.includes("Spock")) {
    actionTextElem.innerText = "Lizard poisons Spock";
  } else if (
    choiceArray.includes("Spock") &&
    choiceArray.includes("Scissors")
  ) {
    actionTextElem.innerText = "Spock smashes Scissors";
  } else if (choiceArray.includes("Spock") && choiceArray.includes("Rock")) {
    actionTextElem.innerText = "Spock vaporizes Rock";
  } else {
    actionTextElem.innerText = "  ";
  }
}

function changeActionTextColor(winner) {
  let actionTextElem = document.getElementById("action-text");
  if (winner == "Player") {
    actionTextElem.style.color = "green";
  } else if (winner == "Tie") {
    actionTextElem.style.color = "yellow";
  } else {
    actionTextElem.style.color = "red";
  }
}

function changeArrowColor(winner) {
  let leftArrow = document.getElementById("left-arrow");
  let rightArrow = document.getElementById("right-arrow");
  let tieIcon = document.getElementById("tie-icon");

  if (winner == "Player") {
    leftArrow.style.color = "green";
    rightArrow.style.color = "black";
    tieIcon.style.color = "black";
  } else if (winner == "Tie") {
    leftArrow.style.color = "black";
    rightArrow.style.color = "black";
    tieIcon.style.color = "yellow";
  } else {
    leftArrow.style.color = "black";
    rightArrow.style.color = "red";
    tieIcon.style.color = "black";
  }
}

function winScreen(winner) {
  let gameCardTitle = document.querySelector("#game-card-title");
  if (winner == "Player") {
    gameCardTitle.textContent = "Player Wins";
  } else if (winner == "Tie") {
    gameCardTitle.textContent = "Tie";
  } else {
    gameCardTitle.textContent = "Computer Wins";
  }
}
