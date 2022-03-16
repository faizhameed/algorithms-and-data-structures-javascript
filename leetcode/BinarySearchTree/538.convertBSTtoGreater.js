var convertBST = function (root) {
  let sum = 0;
  function dfs(node) {
    if (node !== null) {
      dfs(node.right);
      sum += node.val;
      node.val = sum;
      dfs(node.left);
    }
    return node;
  }
  dfs(root);
  return root;
};
