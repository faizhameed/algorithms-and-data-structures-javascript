var recoverTree = function (root) {
  const swap = (a, b) => {
    [a.val, b.val] = [b.val, a.val];
  };
  let pred = null,
    x = null,
    y = null;
  function inOrder(root) {
    if (root === null) return;
    inOrder(root.left);
    if (pred && root.val < pred.val) {
      y = root;
      if (x === null) x = pred;
      else return;
    }
    pred = root;
    inOrder(root.right);
  }
  inOrder(root);
  swap(x, y);
};
