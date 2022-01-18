var maxProfit = function (k, prices) {
  const n = prices.length;
  const dp = new Array(n)
    .fill(0)
    .map(() => new Array(k + 1).fill(0).map(() => new Array(2).fill(-1)));

  console.log(dp);
  return helper(0, k, 0);

  function helper(i, tr, h) {
    if (i === n || tr === 0) {
      return 0;
    }
    if (dp[i][tr][h] === -1) {
      const doNothing = helper(i + 1, tr, h);
      let doSomething;
      if (h === 0) {
        doSomething = -prices[i] + helper(i + 1, tr, 1);
      } else {
        doSomething = prices[i] + helper(i + 1, tr - 1, 0);
      }

      dp[i][tr][h] = Math.max(doSomething, doNothing);
    }
    return dp[i][tr][h];
  }
};

const k = 2,
  prices = [2, 4, 1];
console.log(maxProfit(k, prices));
