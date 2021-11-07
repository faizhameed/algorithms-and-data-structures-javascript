var lowestCommonAncestor = function (root, p, q) {
  let ans = null;
  function DFS(currentNode, p, q) {
    if (currentNode === null) {
      return false;
    }

    const left = DFS(currentNode.left, p, q) ? 1 : 0;
    const right = DFS(currentNode.right, p, q) ? 1 : 0;

    const mid = currentNode === p || currentNode === q;

    if (left + right + mid >= 2) {
      ans = currentNode;
    }

    return left + right + mid > 0;
  }
  DFS(root, p, q);
  return ans;
};
