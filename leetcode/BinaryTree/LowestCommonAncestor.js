var lowestCommonAncestor = function (root, p, q) {
  let ans = null;

  function DFS(currentNode, p, q) {
    if (currentNode === null) {
      return false;
    }

    const left = DFS(currentNode.left, p, q) ? 1 : 0;
    const right = DFS(currentNode.right, p, q) ? 1 : 0;

    const mid = currentNode === p || currentNode === q ? 1 : 0;

    if (left + right + mid >= 2) {
      ans = currentNode;
    }

    return mid + left + right > 0;
  }
  DFS(root, p, q);
  return ans;
};

/* less optimized more space  */
var lowestCommonAncestorBrute = function (root, p, q) {
  const res = [];
  function DFS(root, target, ances = []) {
    if (!root) {
      return;
    }
    ances.push(root.val);
    if (root === target) {
      res.push(ances);
      return;
    }

    DFS(root.left, target, [...ances]);

    DFS(root.right, target, [...ances]);

    return;
  }

  DFS(root, p);

  DFS(root, q);
  let i = 0;
  while (i < res[0].length && i < res[1].length) {
    if (res[0][i] === res[1][i]) {
      i++;
    } else {
      i--;
      break;
    }
  }

  if (i === res[0].length || i === res[1].length) {
    i--;
  }
  const ans = res[0][i];
  let target = null;

  function DFS2(root) {
    if (!root || target) {
      return;
    }

    if (root.val === ans) {
      target = root;
      return;
    }
    DFS2(root.left);
    DFS2(root.right);

    return;
  }
  DFS2(root);

  return target;
};
