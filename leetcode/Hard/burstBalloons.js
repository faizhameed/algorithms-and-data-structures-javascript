/**
 https://leetcode.com/problems/burst-balloons/
 */
var maxCoins = function (nums) {
  const vals = [1, ...nums, 1];
  const n = nums.length;
  const dp = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0));

  for (let len = 1; len <= n + 1; len++) {
    for (let i = 1, j = len; j <= n; j++, i++) {
      for (let k = i; k <= j; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][k - 1] + vals[i - 1] * vals[k] * vals[j + 1] + dp[k + 1][j]
        );
      }
    }
  }
  return dp[1][n];
};

const nums = [3, 1, 5, 8];
console.log(maxCoins(nums));
