const cells = document.querySelectorAll(".cell");

let currentPlayer = "X";

function handleCellClick(event) {
  const cell = event.target;

  if (cell.textContent || checkWinner()) {
    return;
  }

  cell.textContent = currentPlayer;

  if (checkWinner()) {
    document.getElementById("result").textContent = `${currentPlayer} Wins!`;
  } else {
    if (Array.from(cells).every((cell) => cell.textContent)) {
      document.getElementById("result").textContent = "It's a Draw!";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      return true;
    }
  }

  return false;
}

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
