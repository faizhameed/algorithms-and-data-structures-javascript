/* Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

Only numbers 1 through 9 are used.
Each number is used at most once.
Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.
 */

var combinationSum3 = function (
  k,
  n,
  index = 1,
  curr = [],
  paths = [],
  sum = 0
) {
  if (curr.length === k && sum === n) {
    // const sum = curr.reduce((a, v) => a + v, 0);
    paths.push(curr);
    return;
  }

  for (let i = index; i <= 9; i++) {
    const temp = [...curr, i];
    combinationSum3(k, n, i + 1, temp, paths, sum + i);
  }

  return paths;
};

console.log(combinationSum3(9, 45));
