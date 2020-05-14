/* Print binary tree level by level */

const levelorder = (r) => {
  if (!r) {
    return [];
  }
  const result = [],
    arr = [r];
  while (r.length) {
    const value = [];
    let size = arr.length;
    for (let i = 0; i < size; i++) {
      const node = arr.shift();
      value.push(node.value);
      if (node.left !== null) {
        arr.push(node.left);
      }
      if (node.right !== null) {
        arr.push(node.right);
      }
    }
    result.push(...value);
  }
  return result;
};
