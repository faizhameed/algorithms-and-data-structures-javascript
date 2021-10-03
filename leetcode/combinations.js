// given two intergers return all possible combinations of k numbers out of the rande [1,n]
// you may return the answer in any order.

/* https://leetcode.com/problems/combinations/ */
var combine = function (n, k, index = 1, curr = [], paths = []) {
  if (curr.length === k) {
    paths.push(curr);
    return;
  }

  for (let i = index; i <= n; i++) {
    let temp = [...curr, i];
    combine(n, k, i + 1, temp, paths);
  }
  return paths;
};

console.log(combine(4, 3));
