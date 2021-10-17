var kthSmallest = function (root, k) {
  const arr = [];
  function inOrder(root) {
    if (!root) return root;
    inOrder(root.left);
    arr.push(root.val);
    inOrder(root.right);
  }

  inOrder(root);
  return arr[k - 1];
};
