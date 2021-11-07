var rangeSumBST = function (root, low, high) {
  let ans = 0;
  function DFS(currentNode, high, low) {
    if (currentNode === null) {
      return;
    }

    if (currentNode.val >= low && currentNode.val <= high) {
      ans += currentNode.val;
    }
    if (currentNode.left) {
      DFS(currentNode.left, high, low);
    }
    if (currentNode.right) {
      DFS(currentNode.right, high, low);
    }
    return;
  }
  DFS(root, high, low);
  return ans;
};

/* More optimised for BST */

var rangeSumBST = function (root, low, high) {
  let ans = 0;
  function DFS(currentNode, high, low) {
    if (currentNode === null) {
      return;
    }
    if (currentNode.val >= low && currentNode.val <= high) {
      ans += currentNode.val;
    }
    if (currentNode.val > low) {
      // we dont need to go to left all left nodes will be less
      DFS(currentNode.left, high, low);
    }

    if (currentNode.val < high) {
      // all right nodes will be higher
      DFS(currentNode.right, high, low);
    }

    return;
  }
  DFS(root, high, low);
  return ans;
};
