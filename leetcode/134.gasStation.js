var canCompleteCircuit = function (gas, cost) {
  //return the gas station that can make you reach the back
  const n = gas.length;
  let total = 0,
    curr = 0,
    start = 0;

  for (let i = 0; i < n; i++) {
    total += gas[i] - cost[i];
    curr += gas[i] - cost[i];
    if (curr < 0) {
      start = i + 1;
      /* because we reach here with less feul regardless what ever index we start, s
      o we take the next values */
      curr = 0;
    }
  }

  return total >= 0 ? start : -1;
};

const gas = [1, 2, 3, 4, 5],
  cost = [3, 4, 5, 1, 2];

console.log(canCompleteCircuit(gas, cost));
