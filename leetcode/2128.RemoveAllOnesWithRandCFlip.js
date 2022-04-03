var removeOnes = function (grid) {
  const [m, n] = [grid.length, grid[0].length];
  const firstRow = grid[0];

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // check if firstrow[0] is
      if (firstRow[0] === grid[i][0]) {
        if (firstRow[j] !== grid[i][j]) return false;
      } else {
        if (firstRow[j] !== 1 - grid[i][j]) return false;
      }
    }
  }
  return true;
};

const grid = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

console.log(removeOnes(grid));
