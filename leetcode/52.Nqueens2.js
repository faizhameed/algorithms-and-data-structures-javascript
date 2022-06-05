var totalNQueens = function (n) {
  let total = 0;
  solve(0, new Array());
  function solve(curr_row, colPlacements) {
    if (curr_row === n) {
      total++;
      return;
    }
    for (let col = 0; col < n; col++) {
      colPlacements.push(col);
      if (isValid(colPlacements)) {
        solve(curr_row + 1, colPlacements);
      }
      colPlacements.pop();
    }
  }

  return total;
};

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
