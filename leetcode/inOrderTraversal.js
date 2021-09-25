//leetcode.com/problems/binary-tree-inorder-traversal/
var inorderTraversal = function (root) {
  const res = [];
  traverse(root, res);
  return res;
};

function traverse(root, res) {
  if (root) {
    traverse(root.left, res);
    res.push(root.val);
    traverse(root.right, res);
  }
}
