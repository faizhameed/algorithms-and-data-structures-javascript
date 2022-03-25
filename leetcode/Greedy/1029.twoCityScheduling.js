var twoCitySchedCost = function (costs) {
  let totalCost = 0;
  const n = costs.length;
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  for (let i = 0; i < n; i++) {
    const [aCost, bCost] = costs[i];
    if (i < n / 2) {
      totalCost += aCost;
    } else {
      totalCost += bCost;
    }
  }
  return totalCost;
};
