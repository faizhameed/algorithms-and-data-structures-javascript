const getBoxId = (row, col) => {
  const colVal = Math.floor(col / 3);
  const rowVal = Math.floor(row / 3) * 3;
  return colVal + rowVal;
};

const isValid = (box, row, col, num) => {
  if (box[num] || row[num] || col[num]) {
    return false;
  }
  return true;
};

const solveBacktrack = (board, boxes, rows, cols, r, c) => {
  if (r === board.length || c === board[0].length) {
    return true;
  }
  if (board[r][c] === ".") {
    for (let num = 1; num <= 9; num++) {
      board[r][c] = num;
      const boxId = getBoxId(r, c);
      const box = boxes[boxId];
      const row = rows[r];
      const col = cols[c];
      if (isValid(box, row, col, num)) {
        box[num] = true;
        col[num] = true;
        row[num] = true;

        if (c === board[0].length - 1) {
          if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {
            return true;
          }
        } else {
          if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {
            return true;
          }
        }
        delete box[num];
        delete row[num];
        delete col[num];
      }
      // if fails we reset
      board[r][c] = ".";
    }
  } else {
    if (c === board[0].length - 1) {
      if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {
        return true;
      }
    } else {
      if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {
        return true;
      }
    }
  }
  return false;
};
const solveSudoku = (board) => {
  const n = board.length;
  const boxes = new Array(n),
    rows = new Array(n),
    cols = new Array(n);

  for (let i = 0; i < n; i++) {
    boxes[i] = {};
    rows[i] = {};
    cols[i] = {};
  }

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] !== ".") {
        //board is not empty at this point
        const val = board[r][c];
        const boxId = getBoxId(r, c);
        boxes[boxId][val] = true;
        cols[c][val] = true;
        rows[r][val] = true;
      }
    }
  }

  solveBacktrack(board, boxes, rows, cols, 0, 0);
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

solveSudoku(board);
console.log(board);
