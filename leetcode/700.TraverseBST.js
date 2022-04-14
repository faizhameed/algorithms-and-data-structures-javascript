var searchBST = function (root, val) {
  function traverse(root) {
    if (!root) {
      return null;
    }
    if (root.val === val) {
      return root;
    }
    if (root.val > val) {
      return traverse(root.left);
    } else {
      return traverse(root.right);
    }
  }

  return traverse(root);
};
