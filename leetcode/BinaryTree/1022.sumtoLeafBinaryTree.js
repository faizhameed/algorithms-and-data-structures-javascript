var sumRootToLeaf = function (root) {
  let sum = 0;
  function DFS(root, str = "") {
    str += root.val;
    if (root.left) {
      DFS(root.left, str);
    }
    if (root.right) {
      DFS(root.right, str);
    }
    if (!root.right && !root.left) {
      // we are at the end
      sum += parseInt(str, 2);
    }
  }
  DFS(root);
  return sum;
};
