function solve(n, dp) {
  if (n % 2 === 0) return (dp[n] = []);
  if (dp[n]) return dp[n];
  if (n === 1) return (dp[1] = [new TreeNode(0)]);
  const ans = [];

  for (let x = 0; x < n; x++) {
    const y = n - x - 1;
    const left = solve(x, dp);
    const right = solve(y, dp);
    for (let i = 0; i < left.length; i++)
      for (let j = 0; j < right.length; j++) {
        const node = new TreeNode(0);
        node.left = left[i];
        node.right = right[j];
        ans.push(node);
      }
  }
  return (dp[n] = ans);
}

var allPossibleFBT = function (n) {
  return solve(n, {});
};
