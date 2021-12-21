// Best Time to Buy and Sell Stock with Transaction Fee

var maxProfit = function (prices, fee) {
  if (prices.length === 0) return 0;
  let cash = 0,
    hold = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    cash = Math.max(cash, hold + prices[i] - fee);
    hold = Math.max(hold, cash - prices[i]);
  }
  return cash;
};

const prices = [1, 3, 2, 8, 4, 9],
  fee = 2;

console.log(maxProfit(prices, fee));
