var widthOfBinaryTree = function (root) {
  if (!root) {
    return 0;
  }
  const map = {};
  function getMax(a, b) {
    return a > b ? a : b;
  }
  function getMin(a, b) {
    return a > b ? b : a;
  }
  function dfs(node, index, level) {
    if (map[level]) {
      map[level] = [getMin(map[level][0], index), getMax(map[level][1], index)];
    } else {
      map[level] = [index, index];
    }
    if (node.left) {
      dfs(node.left, 2n * index, level + 1n);
    }
    if (node.right) {
      dfs(node.right, 2n * index + 1n, level + 1n);
    }
  }
  dfs(root, 0n, 1n);
  let dist = 1n;
  for (const [a, b] of Object.values(map)) {
    dist = getMax(b - a + 1n, dist);
  }
  return dist;
};
