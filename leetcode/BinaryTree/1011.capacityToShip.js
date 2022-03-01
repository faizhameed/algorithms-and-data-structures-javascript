var shipWithinDays = function (weights, days) {
  // weights.sort((a,b)=>a-b)
  let lo = Math.max(...weights), // thing why?
    hi = weights.reduce((acc, cur) => acc + cur, 0); // TW?

  while (lo < hi) {
    const mid = Math.floor(lo + (hi - lo) / 2);
    const dayCount = daysTaken(mid, weights);
    if (dayCount > days) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
};

function daysTaken(target, weights) {
  let days = 1,
    dayWeight = 0;

  for (let i = 0; i < weights.length; i++) {
    if (dayWeight + weights[i] > target) {
      // console.log(currWeight,weight)
      days++;
      dayWeight = weights[i];
    } else {
      dayWeight += weights[i];
    }
  }
  return days;
}

const weights = [1, 2, 3, 1, 1],
  days = 4;

console.log(shipWithinDays(weights, days));
