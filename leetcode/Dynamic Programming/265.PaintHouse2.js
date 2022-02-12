var minCostII = function (costs) {
  const dp = new Array(costs.length)
    .fill(0)
    .map(() => new Array(costs[0].length).fill(0));
  const n = costs.length;
  const k = costs[0].length;
  for (let i = 0; i < k; i++) {
    dp[0][i] = costs[0][i];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < k; j++) {
      dp[i][j] = costs[i][j] + getMin(j, dp[i - 1]);
    }
  }

  return Math.min(...dp[n - 1]);
  function getMin(idx, arr) {
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (idx === i) continue;
      min = Math.min(min, arr[i]);
    }
    return min;
  }
};
