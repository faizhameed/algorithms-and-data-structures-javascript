/* Hard Question */

var winnerSquareGame = function (n) {
  const dp = new Array(n + 1).fill(false);
  for (let i = 0; i < n + 1; i++) {
    for (let k = 1; k * k <= i; k++) {
      if (dp[i - k * k] === false) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
};

console.log(winnerSquareGame(10));
