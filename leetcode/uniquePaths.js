/* 

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
*/
var uniquePaths = function (m, n) {
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  function findPath(m, n) {
    if (m === 1 || n === 1) return 1;
    if (dp[m][n]) {
      return dp[m][n];
    }

    dp[m][n] = findPath(m - 1, n) + findPath(m, n - 1);
    return dp[m][n];
  }
  return findPath(m, n);
};

console.log(uniquePaths(100, 7));
