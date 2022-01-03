var isSubtree = function (root, subRoot) {
  function dfs(curr) {
    if (curr === subRoot) {
      return true;
    }
    if (curr === null) return false;
    if (dfs(curr.right)) {
      return true;
    }
    if (dfs(curr.left)) {
      return true;
    }
  }
  return dfs(root) ? true : false;
};

/* Optimal way */
var isSubtree = function (root, subRoot) {
  if (!root) return !subRoot;
  return (
    isEqual(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
};

function isEqual(root, sub) {
  if (!root || !sub) return !root && !sub;
  if (root.val !== sub.val) return false;
  // that means now they are equal so
  return isEqual(root.left, sub.left) && isEqual(root.right, sub.right);
}
