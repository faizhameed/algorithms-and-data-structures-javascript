var uniquePathsWithObstacles = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  dp[0][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        if (i - 1 >= 0) {
          dp[i][j] += dp[i - 1][j];
        }
        if (j - 1 >= 0) {
          dp[i][j] += dp[i][j - 1];
        }
      }
    }
  }
  return dp[m - 1][n - 1];
};
