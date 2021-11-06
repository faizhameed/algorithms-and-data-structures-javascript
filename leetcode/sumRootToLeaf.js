var sumNumbers = function (root) {
  let arrSum = 0;

  function dfs(root, curr = 0) {
    if (!root) {
      return;
    }
    curr = curr * 10 + root.val;
    if (!root.right && !root.left) {
      arrSum += curr;
      return;
    }

    if (root.left) {
      dfs(root.left, curr);
    }
    if (root.right) {
      dfs(root.right, curr);
    }
  }
  dfs(root);
  return arrSum;
};
