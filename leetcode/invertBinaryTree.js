var invertTree = function (root) {
  // BFS will do the trick here

  if (!root) return root;
  const queue = [root];

  while (queue.length) {
    const curr = queue.shift();

    let temp = curr.left;
    curr.left = curr.right;
    curr.right = temp;

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return root;
};

// recursive solution

function recursiveInvert(root) {
  if (root !== null) {
    //swap
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    recursiveInvert(root.left);
    recursiveInvert(root.right);
    return root;
  }
  return null;
}
