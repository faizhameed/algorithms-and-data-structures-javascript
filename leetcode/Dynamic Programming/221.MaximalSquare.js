var maximalSquare = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  let max = 0;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i - 1][j - 1] === "1") {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        max = Math.max(dp[i][j], max);
      }
    }
  }
  return max * max;
};

const matrix = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "1", "1", "1", "0"],
];

console.log(maximalSquare(matrix));
