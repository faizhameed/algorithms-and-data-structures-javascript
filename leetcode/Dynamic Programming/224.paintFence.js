var numWays = function (n, k) {
  if (n == 1) {
    return k;
  }
  let first = k,
    second = k * first;

  if (n <= 1) {
    return second;
  }

  for (let i = 2; i < n; i++) {
    const temp = second;
    second = (k - 1) * (first + second);
    first = temp;
  }

  return second;
};

/* Top Down Approach */

var numWays2 = function (n, k) {
  const memo = {};

  function totalWays(i) {
    if (i === 1) {
      return k;
    }
    if (i === 2) {
      return k * k;
    }
    if (!memo[i]) {
      memo[i] = (k - 1) * (totalWays(i - 1) + totalWays(i - 2));
    }
    return memo[i];
  }
  return totalWays(n);
};

const n = 7,
  k = 2;

console.log(numWays2(n, k));
