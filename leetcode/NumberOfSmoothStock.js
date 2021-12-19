var getDescentPeriods = function (prices) {
  const n = prices.length;
  let prev = 1;
  let result = 1;
  for (let i = 1; i < n; i++) {
    if (prices[i - 1] - prices[i] === 1) {
      curr = 1 + prev;
    } else {
      curr = 1;
    }
    prev = curr;
    result += curr;
  }
  return result;
};

const prices = [3, 2, 1, 4];

console.log(getDescentPeriods(prices));
