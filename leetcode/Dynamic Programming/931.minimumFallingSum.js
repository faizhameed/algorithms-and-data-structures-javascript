var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  const dp = Array(n)
    .fill(null)
    .map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    dp[0][i] = matrix[0][i];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] += matrix[i][j];
      if (j > 0 && j < n - 1) {
        dp[i][j] += Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]);
      } else if (j === 0) {
        dp[i][j] += Math.min(dp[i - 1][j + 1], dp[i - 1][j]);
      } else {
        dp[i][j] += Math.min(dp[i - 1][j], dp[i - 1][j - 1]);
      }
    }
  }
  let min = Infinity;

  for (let j = 0; j < n; j++) min = Math.min(dp[n - 1][j], min);
  return min;
};

const matrix = [
  [-19, 57],
  [-40, -5],
];

console.log(minFallingPathSum(matrix));
