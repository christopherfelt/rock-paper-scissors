// TODO Steps
// Have the buttons change the text on the player-card-title
function play(playerInput) {
  let gameOutcome = calculateGame(playerInput);
  drawGame(gameOutcome);
}

function calculateGame(playerInput) {
  let computerInput = generateComputerInput();
  let gameOutcome = compareInputs(playerInput, computerInput);
  return gameOutcome; // returns results of comparison object
}

function generateComputerInput() {
  let randomChoice = Math.floor(Math.random() * 3 + 1);
  console.log(randomChoice);
  let computerInput = "";
  if (randomChoice == 1) {
    computerInput = "Rock";
  } else if (randomChoice == 2) {
    computerInput = "Paper";
  } else {
    computerInput = "Scissors";
  }
  return computerInput;
}

function compareInputs(playerInput, computerInput) {
  let gameOutcome = {};
  gameOutcome.playerInput = playerInput;
  gameOutcome.computerInput = computerInput;

  if (
    (playerInput == "Rock" && computerInput == "Scissors") ||
    (playerInput == "Paper" && computerInput == "Rock") ||
    (playerInput == "Scissors" && computerInput == "Paper")
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
  } else {
    imageAttribute.src = "scissors.jpg";
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
