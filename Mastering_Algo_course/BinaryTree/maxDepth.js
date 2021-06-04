const maxDepth = (root, count = 0) => {
  if (!root) {
    return count;
  }
  count++;
  return Math.max(maxDepth(root.right, count), maxDepth(root.left, count));
};
