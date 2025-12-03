//BFS

function traverseTree(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];
  while (queue.length) {
    let node = queue.shift();
    result.push(node?.value || null);
    if (node) {
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  console.log(result);
}

traverseTree({
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
});
