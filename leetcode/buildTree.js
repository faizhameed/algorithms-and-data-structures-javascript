/* Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree. */

var buildTree = function (preorder, inorder) {
  // root value = preOrder[0]
  let i = (p = 0);
  function build(stop) {
    if (inorder[i] !== stop) {
      const root = new TreeNode(preorder[p++]);
      root.left = build(root.val);
      i++;
      root.right = build(stop);
      return root;
    }
    return null;
  }
  return build();
};
/* 
preorder: [1, 2, 4, 5, 3, 6];
inorder: [4, 2, 5, 1, 6, 3]; */

var buildTree = function (postorder, inorder) {
  // root value = preOrder[0]
  const map_inorder = {};

  inorder.forEach((v, i) => {
    map_inorder[v] = i;
  });
  function build(left, right) {
    if (left > right) {
      return null;
    }
    const root = new TreeNode(postorder.pop());

    const mid = map_inorder[root.val];
    root.right = build(mid + 1, right);
    root.left = build(left, mid - 1);
    return root;
  }
  return build(0, inorder.length - 1);
};
