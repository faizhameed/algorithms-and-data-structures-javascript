var mostPoints = function (questions) {
  const n = questions.length;
  const dp = new Array(n + 1).fill(0);
  dp[n] = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (questions[i][1] + i + 1 > n) {
      // we have nothing in front of us
      dp[i] = Math.max(questions[i][0], dp[i + 1]);
    } else {
      dp[i] = Math.max(
        questions[i][0] + dp[i + 1 + questions[i][1]],
        dp[i + 1]
      );
    }
  }

  return dp[0];
};
const questions = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
];

console.log(mostPoints(questions));
