const minCost = (costs) => {
  /* 
each house can be painted one of three colors: red, blue, or green
 costs[0][0] is the cost of painting house 0 with the color red; 
 costs[1][2] is the cost of painting house 1 with color green
 n x 3 cost matrix costs
 */
  const n = costs.length;
  const dp = Array(n)
    .fill(0)
    .map(() => new Array(3).fill(0));
  dp[0][0] = costs[0][0];
  dp[0][1] = costs[0][1];
  dp[0][2] = costs[0][2];

  for (let i = 1; i < n; i++) {
    dp[i][0] = costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = costs[i][2] + Math.min(dp[i - 1][1], dp[i - 1][0]);
  }
  return Math.min(...dp[n - 1]);
};

const costs = [
  [17, 2, 17],
  [16, 5, 16],
  [14, 3, 19],
];

console.log(minCost(costs));
