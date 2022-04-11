/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const m = grid.length,
    n = grid[0].length;

  while (k > 0) {
    let prev = grid[0][0];
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        const temp = prev;
        if (j < n - 1) {
          prev = grid[i][j + 1];
          grid[i][j + 1] = temp;
        } else if (i < m - 1 && j === n - 1) {
          prev = grid[i + 1][0];
          grid[i + 1][0] = temp;
        } else if (i === m - 1 && j === n - 1) {
          prev = grid[0][0];
          grid[0][0] = temp;
        }
      }
    }
    k--;
  }
  return grid;
};

const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  k = 2;

console.log(shiftGrid(grid, k));
