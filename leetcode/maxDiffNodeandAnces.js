var maxAncestorDiff = function (root) {
  let result = 0;
  function dfs(node, curr_max, curr_min) {
    if (node === null) {
      return;
    }
    result = Math.max(
      result,
      Math.abs(curr_max - node.val),
      Math.abs(curr_min - node.val)
    );
    curr_max = Math.max(curr_max, node.val);
    curr_min = Math.min(curr_min, node.val);
    dfs(node.left, curr_max, curr_min);
    dfs(node.right, curr_max, curr_min);
  }
  dfs(root, root.val, root.val);
  return result;
};

/* ALternative */

var maxAncestorDiff = function (root) {
  function dfs(node, curr_max, curr_min) {
    if (node === null) {
      return curr_max - curr_min;
    }

    curr_max = Math.max(curr_max, node.val);
    curr_min = Math.min(curr_min, node.val);
    const left = dfs(node.left, curr_max, curr_min);
    const right = dfs(node.right, curr_max, curr_min);
    return Math.max(left, right);
  }
  return dfs(root, root.val, root.val);
};
