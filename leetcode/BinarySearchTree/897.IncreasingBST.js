function increasingBST(root) {
  const ans = new TreeNode(0);
  let curr = ans;
  function inOrder(node) {
    if (!node) return null;
    inOrder(node.left);
    node.left = null;
    curr.right = node;
    curr = node;
    inOrder(node.right);
  }
  inOrder(root);
  return ans.right;
}
