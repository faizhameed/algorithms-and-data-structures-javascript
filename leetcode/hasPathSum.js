/* https://leetcode.com/problems/path-sum */

var hasPathSum = function (root, targetSum) {
  const sumArr = [];
  function traversal(root, currentSum = 0) {
    if (!root) {
      return;
    }
    currentSum += root.val;
    if (!root.left && !root.right) {
      sumArr.push(currentSum);
    }

    if (root.left) {
      traversal(root.left, currentSum);
    }
    if (root.right) {
      traversal(root.right, currentSum);
    }
  }
  traversal(root);
  return sumArr.includes(targetSum);
};
