function sqrt(x) {
  let hi = x + 1,
    lo = 1;

  while (lo < hi) {
    const mid = Math.floor(lo + (hi - lo) / 2);
    if (mid * mid > x) hi = mid;
    else lo = mid + 1;
  }
  return lo - 1;
}

console.log(sqrt(4));
