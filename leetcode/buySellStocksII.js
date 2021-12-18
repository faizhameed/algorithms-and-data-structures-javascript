var maxProfit = function (prices) {
  let minPrice = prices[0],
    profit = 0;
  for (let i = 0; i < prices.length; i++) {
    const curr = prices[i];
    if (minPrice > curr) {
      minPrice = curr;
      continue;
    }
    profit += curr - minPrice;
    minPrice = curr;
  }
  return profit;
};
const values = [7, 1, 2, 5, 6, 0, 4];

console.log(maxProfit(values));
