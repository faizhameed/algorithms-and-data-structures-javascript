var combinationSum = function (
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

console.log(combinationSum([4, 8, 11, 10, 9, 3, 12, 7, 6], 25));
