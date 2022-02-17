var combinationSum1 = function (
  candidates,
  target,
  curr = [],
  sum = 0,
  paths = []
) {
  if (!paths.length) {
    candidates.sort((a, b) => a - b);
  }
  if (sum === target) {
    paths.push(curr);
    return;
  }
  if (curr.length === target) {
    return;
  }
  if (sum > target) return;
  for (let i = 0; i < candidates.length; i++) {
    const val = candidates[i];
    if (!curr.length || val >= curr[curr.length - 1]) {
      combinationSum(candidates, target, [...curr, val], sum + val, paths);
    }
  }
  return paths;
};

var combinationSum = function (candidates, target) {
  const res = [],
    n = candidates.length;

  function helper(sum = 0, curr = [], idx = 0) {
    if (sum === target) {
      res.push(curr);
      return;
    }
    for (let i = idx; i < n; i++) {
      const tSum = candidates[i] + sum;
      if (tSum <= target) {
        helper(tSum, [...curr, candidates[i]], i);
      }
    }
  }
  helper();
  return res;
};

console.log(combinationSum([4, 8, 11, 10, 9, 3, 12, 7, 6], 25));
