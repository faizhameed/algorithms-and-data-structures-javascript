var solveNQueens = function (n) {
  const res = [];
  solve(0, new Array(), n, res);
  return res;
};

function solve(curr_row, colPlacements, n, res) {
  if (curr_row === n) {
    const board = generateBoard(colPlacements, n);
    res.push(board);
    return;
  }

  for (let col = 0; col < n; col++) {
    colPlacements.push(col);
    if (isValid(colPlacements)) {
      solve(curr_row + 1, colPlacements, n, res);
    }

    colPlacements.pop();
  }
}

function generateBoard(colPlacements, n) {
  const board = [];
  for (let row = 0; row < n; row++) {
    let row_board = [];
    for (let col = 0; col < n; col++) {
      if (col === colPlacements[row]) {
        row_board.push("Q");
      } else {
        row_board.push(".");
      }
    }
    board.push(row_board.join(""));
  }
  return board;
}

function isValid(colPlacements) {
  let curr_row = colPlacements.length - 1;

  for (let row = 0; row < curr_row; row++) {
    const colDistance = Math.abs(colPlacements[row] - colPlacements[curr_row]);
    const rowDistance = curr_row - row;
    if (colDistance === 0 || rowDistance === colDistance) {
      return false;
    }
  }
  return true;
}

console.log(solveNQueens(4));
