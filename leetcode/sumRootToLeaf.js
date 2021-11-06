var sumNumbers = function (root) {
  let arrSum = 0;

  function dfs(root, curr = "") {
    if (!root) {
      return;
    }
    curr += root.val;
    if (!root.right && !root.left) {
      arrSum += parseInt(curr);
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
