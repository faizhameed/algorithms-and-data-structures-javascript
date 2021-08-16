/*  https://leetcode.com/problems/best-time-to-buy-and-sell-stock/*/

var maxProfit = function (prices) {
  let min = prices[0],
    maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const val = prices[i];
    if (min > val) {
      min = val;
    }
    if (maxProfit < val - min) {
      maxProfit = val - min;
    }
  }
  return maxProfit;
};
const arr = [7, 1, 5, 3, 6, 4, 100];
console.log(maxProfit([7, 6, 4, 3, 1]));
