var lowestCommonAncestor = function (root, p, q) {
  let ans = null;

  function DFS(currentNode, p, q) {
    if (currentNode === null) {
      return false;
    }
    if (p.val > currentNode.val && q.val > currentNode.val) {
      DFS(currentNode.right, p, q);
    } else if (p.val < currentNode.val && q.val < currentNode.val) {
      DFS(currentNode.left, p, q);
    } else {
      ans = currentNode;
      return;
    }
  }
  DFS(root, p, q);
  return ans;
};
