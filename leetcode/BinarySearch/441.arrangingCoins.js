var arrangeCoins = function (n) {
  // total coins need for 3rd step is n(n+1)/2

  function sumToN(n) {
    return (n * (n + 1)) / 2;
  }

  let lo = 0;
  let hi = n;
  while (lo < hi) {
    const mid = Math.floor(lo + (hi - lo) / 2);
    if (sumToN(mid) >= n) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return sumToN(lo) === n ? lo : lo - 1;
};

console.log(arrangeCoins(8));
