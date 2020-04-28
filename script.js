let origBoard;
let myTurn = true;
let human = "";
let count = 0;

const xCombo = [];
const oCombo = [];
const winCombo = [
  ["0", "1", "2"],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 8],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

const cells = document.querySelectorAll(".cell");
startGame();

function startGame() {
  document.querySelector(".endgame").style.display = "none";
  origBoard = Array.from(Array(9).keys());
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].style.removeProperty("backgorund-color");
    cells[i].addEventListener("click", turnClick, false);
  }
}

function turnClick(square) {
  if (count % 2 === 0) {
    human = "O";
  } else {
    human = "X";
  }
  turn(square.target.id, human);
  if (human === "O") {
    oCombo.push(`${square.target.id}`);
    console.log(oCombo);
  } else {
    xCombo.push(`${square.target.id}`);
    console.log(xCombo);
  }
  count++;
}

function turn(squareId, player) {
  origBoard[squareId] = player;
  document.getElementById(squareId).innerText = player;
  let gameWon = checkWin(origBoard, player);
  if (gameWon) gameOver(gameWon);
}

function checkWin(xCombo, winCombo) {
  if (xCombo.length !== winCombo.length) return false;

  // Check if all items exist and are in the same order
  for (var i = 0; i < arr1.length; i++) {
    if (xCombo[i] !== winCombo[i]) return false;
  }

  // Otherwise, return true
  //   return true;
  console.log("winner");
}
