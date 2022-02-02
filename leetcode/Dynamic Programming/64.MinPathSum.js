var minPathSum = function (grid) {
  const dp = new Array(grid.length)
    .fill(0)
    .map(() => new Array(grid[0].length).fill(0));

  const m = grid.length;
  const n = grid[0].length;
  dp[0][0] = grid[0][0];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      if (i - 1 >= 0 && j - 1 >= 0) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      } else {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      }
    }
  }
  return dp[m - 1][n - 1];
};

const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

console.log(minPathSum(grid));
