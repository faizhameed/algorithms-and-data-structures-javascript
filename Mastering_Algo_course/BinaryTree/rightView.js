var rightSideView = function (root) {
  const masterArr = [];
  if (!root) {
    return [];
  }
  const levelOrder = (head, level = 0) => {
    if (!masterArr[level]) {
      masterArr[level] = [head.val];
    } else {
      masterArr[level].push(head.val);
    }

    if (head.right) {
      levelOrder(head.right, level + 1);
    }
    if (head.left) {
      levelOrder(head.left, level + 1);
    }
  };
  levelOrder(root);
  console.log(masterArr);
  const final = masterArr.map((elem) => elem[0]);
  return final;
};

/* Alternative Method */

const rightView2 = (root) => {
  const result = [];
  if (!root) return [];
  dfs(root, 0, result);
  return result;
};

const dfs = (node, currentLevel, result) => {
  if (currentLevel >= result.length) {
    result.push(node.val);
  }

  if (node.right) {
    dfs(node.right, currentLevel + 1, result);
  }
  if (node.left) {
    dfs(node.left, currentLevel + 1, result);
  }
};
