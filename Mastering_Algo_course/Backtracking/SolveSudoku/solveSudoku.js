const getBoxId = (row, col) => {
  const rowVal = Math.floor(row / 3) * 3;
  const colVal = Math.floor(col / 3);
  return rowVal + colVal;
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

solveSudoku2(board);
console.log(board);

function sudokuBacktrack(board, boxes, rows, cols, r, c) {
  if (r === board.length || c === board[0].length) {
    return true;
  }
  if (board[r][c] === ".") {
    const boxId = getBoxId(r, c);
    const box = boxes[boxId];
    const row = rows[r];
    const col = cols[c];
    for (let num = 1; num <= 9; num++) {
      const numVal = num.toString();
      board[r][c] = numVal;

      if (isValid(box, row, col, numVal)) {
        box[numVal] = true;
        row[numVal] = true;
        col[numVal] = true;

        if (c === board[0].length - 1) {
          if (sudokuBacktrack(board, boxes, rows, cols, r + 1, 0)) {
            return true;
          }
        } else {
          if (sudokuBacktrack(board, boxes, rows, cols, r, c + 1)) {
            return true;
          }
        }

        delete box[numVal];
        delete row[numVal];
        delete col[numVal];
      }

      board[r][c] = ".";
    }
  } else {
    if (c === board[0].length - 1) {
      if (sudokuBacktrack(board, boxes, rows, cols, r + 1, 0)) {
        return true;
      }
    } else {
      if (sudokuBacktrack(board, boxes, rows, cols, r, c + 1)) {
        return true;
      }
    }
  }

  return false;
}

function solveSudoku2(board) {
  const n = board.length;
  const rows = new Array(n);
  const cols = new Array(n);
  const boxes = new Array(n);

  for (let i = 0; i < n; i++) {
    boxes[i] = {};
    rows[i] = {};
    cols[i] = {};
  }

  //initalise the current values
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] !== ".") {
        const boxId = getBoxId(r, c);
        const val = board[r][c];
        boxes[boxId][val] = true;
        rows[r][val] = true;
        cols[c][val] = true;
      }
    }
  }
  sudokuBacktrack(board, boxes, rows, cols, 0, 0);
}
