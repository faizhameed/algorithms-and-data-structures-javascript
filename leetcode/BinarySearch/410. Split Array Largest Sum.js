var splitArray = function (nums, m) {
  let lo = Math.max(...nums),
    hi = nums.reduce((a, v) => a + v, 0);
  function isFeasible(mid) {
    // how many ways to split to get the target
    let total = 0;
    let count = 1;
    for (const v of nums) {
      total += v;
      if (total > mid) {
        count++;
        total = v;
        if (count > m) {
          return false;
        }
      }
    }
    return true;
  }

  while (lo < hi) {
    const mid = Math.floor(lo + (hi - lo) / 2);
    if (isFeasible(mid)) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
};
