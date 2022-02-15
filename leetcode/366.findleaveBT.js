var findLeaves = function (root) {
  const res = [];

  let curr = root,
    temp = [];
  while (root !== null) {
    if (!root.left && !root.right) {
      res.push([root.val]);
      break;
    }
    helper(root);
    res.push(temp);
    temp = [];
  }

  function helper(prev, curr = root, dir) {
    if (!curr.left && !curr.right) {
      temp.push(curr.val);
      prev[dir] = null;
    }
    if (curr.left) {
      helper(curr, curr.left, "left");
    }
    if (curr.right) {
      helper(curr, curr.right, "right");
    }
  }

  return res;
};
