/* 309. Best Time to Buy and Sell Stock with Cooldown */
var maxProfit = function (prices) {
  //
  const n = prices.length;
  if (n <= 1) return 0;
  const noStock = new Array(n);
  const inHand = new Array(n);
  const sold = new Array(n);

  noStock[0] = 0;
  inHand[0] = -prices[0];
  sold[0] = 0;

  for (let i = 1; i < n; i++) {
    // no stock if we didnt buy or if we sold the day before
    noStock[i] = Math.max(sold[i - 1], noStock[i - 1]);
    // inhand if we bought today or was already in hand
    inHand[i] = Math.max(inHand[i - 1], noStock[i - 1] - prices[i]);
    // sold if we bought the day before or inhand
    sold[i] = Math.max(inHand[i - 1] + prices[i]);
  }
  return Math.max(noStock[n - 1], sold[n - 1]);
};

var maxProfit = function (prices) {
  //Space optimizes
  if (n <= 1) return 0;
  let noStock = 0;
  let inHand = -prices[0];
  let sold = 0;

  for (let i = 1; i < n; i++) {
    // no stock if we didnt buy or if we sold the day before
    const prevNoStock = noStock;
    const prevInHand = inHand;
    noStock = Math.max(sold, prevNoStock);
    // inhand if we bought today or was already in hand
    inHand = Math.max(prevInHand, prevNoStock - prices[i]);
    // sold if we bought the day before or inhand
    sold = Math.max(prevInHand + prices[i]);
  }
  return Math.max(noStock, sold);
};

/* DP different approach */

var maxProfit2 = function (prices) {
  const n = prices.length;
  const MP = new Array(n + 2).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    let C1 = 0;
    for (let sell = i + 1; sell < n; sell++) {
      const profit = prices[sell] - prices[i] + MP[sell + 2];
      C1 = Math.max(C1, profit);
    }

    const C2 = MP[i + 1];
    MP[i] = Math.max(C1, C2);
  }

  return MP[0];
};
const prices = [1, 2, 3, 0, 2];

console.log(maxProfit2(prices));
