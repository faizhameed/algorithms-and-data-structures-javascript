let MOD = 1_000_000_007;
var countOrders = function (n) {
  const memo = Array(n + 1)
    .fill(0)
    .map(() => Array(n + 1));
  function totalWays(unPicked, unDelivered) {
    if (unPicked === 0 && unDelivered === 0) {
      return 1;
    }
    if (unPicked < 0 || unDelivered < 0 || unDelivered < unPicked) {
      return 0;
    }
    if (memo[unPicked][unDelivered]) return memo[unPicked][unDelivered];

    let ans = 0;
    ans += unPicked * totalWays(unPicked - 1, unDelivered);
    ans %= MOD;
    ans += (unDelivered - unPicked) * totalWays(unPicked, unDelivered - 1);
    ans %= MOD;
    return (memo[unPicked][unDelivered] = ans);
  }
  return totalWays(n, n);
};
