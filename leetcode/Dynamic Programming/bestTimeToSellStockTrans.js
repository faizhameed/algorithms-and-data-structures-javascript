// Best Time to Buy and Sell Stock with Transaction Fee

var maxProfit = function (prices, fee) {
  const n = prices.length;
  const dp = new Array(n).fill(0);
  let max = -Infinity;
  dp[0] = [-prices[0]];
  for (let i = 1; i < n; i++) {
    //
  }
};

const prices = [1, 3, 2, 8, 4, 9],
  fee = 2;

console.log(maxProfit(prices, fee));
