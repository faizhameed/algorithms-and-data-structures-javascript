/* https://leetcode.com/problems/climbing-stairs/ */

const dp = {};
var climbStairs = function (n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  if (dp[n]) {
    return dp[n];
  } else {
    dp[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }
  return dp[n];
};

console.log(climbStairs(45));
