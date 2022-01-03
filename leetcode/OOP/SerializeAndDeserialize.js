/* BST can be stringified after preOrder array and then converted back by postOrder
operation */

var serialize = function (root) {
  const preOrder = [];
  function dfs(node) {
    if (node === null) return null;
    preOrder.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return preOrder.join(",");
};

var deserialize = function (data) {
  if (data === "") return null;
  const preOrder = data.split(",");
  function recur(lower, upper) {
    if (Number(preOrder[0]) < lower || Number(preOrder[0]) > upper) return null;
    if (preOrder.length === 0) return null;
    const root = new TreeNode(preOrder.shift());
    root.left = dfs(root.left, upper);
    root.right = dfs(lower, root.right);
    return root;
  }
  return recur(-Infinity, Infinity);
};
