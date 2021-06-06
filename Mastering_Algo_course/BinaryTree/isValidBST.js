const isValidBST = (root) => {
  if (!root) {
    return false;
  }

  return checkBST(root, -Infinity, Infinity);
};

const checkBST = (root, min, max) => {
  if (root.val <= min || root.val >= max) {
    return false;
  }

  if (root.left && !checkBST(root.left, min, root.val)) {
    return false;
  }
  if (root.right && !checkBST(root.right, root.val, max)) {
    return false;
  }
  return true;
};
