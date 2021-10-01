var mergeTrees = function (root1, root2) {
  if (root1 === null) {
    return root2;
  }
  if (root2 === null) {
    return root1;
  }
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);

  return root1;
};

/* iterative solution */

var mergeTrees2 = (root1, root2) => {
  if (root1 === null) {
    return root2;
  }
  const stack = [[root1, root2]];
  while (stack.length) {
    const curr = stack.pop();

    //if both are null we can continue
    if (curr[0] === null && curr[1] === null) {
      continue;
    }

    curr[0].val += curr[1].val;
    if (curr[0].left === null) {
      curr[0].left = curr[1].left;
    } else {
      stack.push([curr[0].left, curr[1].left]);
    }

    if (curr[0].right === null) {
      curr[0].right = curr[1].right;
    } else {
      stack.push([curr[0].right, curr[1].right]);
    }
  }

  return root1;
};
