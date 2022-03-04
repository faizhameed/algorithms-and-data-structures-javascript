var champagneTower = function (poured, query_row, query_glass) {
  const dp = new Array(102).fill(0).map(() => new Array(102).fill(0));

  dp[0][0] = poured;

  for (let i = 0; i <= query_row; i++) {
    for (let j = 0; j <= query_glass; j++) {
      const q = (dp[i][j] - 1.0) / 2.0;
      if (q > 0) {
        dp[i + 1][j] += q;
        dp[i + 1][j + 1] += q;
      }
    }
  }

  return Math.min(1, dp[query_row][query_glass]);
};
