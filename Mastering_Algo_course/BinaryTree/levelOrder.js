/* https://leetcode.com/problems/binary-tree-level-order-traversal/ */

const levelOrder = (head, currentLevel = 0) => {
  const masterArr = [];
  const levelOrderTraversal = (head, currentLevel = 0) => {
    if (!head) {
      return [];
    }
    if (masterArr[currentLevel]) {
      masterArr[currentLevel].push([head.val]);
    } else {
      masterArr[currentLevel] = [head.val];
    }
    if (head.left) {
      levelOrderTraversal(head.left, currentLevel + 1);
    }
    if (head.right) {
      levelOrderTraversal(head.right, currentLevel + 1);
    }
  };
  levelOrderTraversal(head, currentLevel);
  return masterArr;
};

/* Alternative solution using queue arrays and while loop */
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values) {
    const queue = [this];
    let i = 0;
    while (queue.length > 0) {
      let current = queue.shift();
      for (let side of ["left", "right"]) {
        if (!current[side]) {
          if (values[i] !== null) {
            current[side] = new TreeNode(values[i]);
          }
          i++;
          if (i >= values.length) return this;
        }
        if (current[side]) queue.push(current[side]);
      }
    }
    return this;
  }
}

const tree = new TreeNode(3);
tree.insert([
  6,
  1,
  9,
  2,
  null,
  4,
  null,
  5,
  null,
  null,
  null,
  null,
  8,
  null,
  null,
  null,
]);
// ------- Code to generate our binary tree -------

// ------- Our Solution -------
const levelOrder2 = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length) {
    const currentLevelValues = [];
    let length = queue.length,
      count = 0;

    while (count < length) {
      const currentNode = queue.shift();

      currentLevelValues.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      count++;
    }

    result.push(currentLevelValues);
  }

  return result;
};

console.log(levelOrder2(tree));
