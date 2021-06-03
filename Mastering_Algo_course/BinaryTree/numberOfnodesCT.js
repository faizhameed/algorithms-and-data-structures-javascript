/* Find number of nodes in a complete binary tree
-> in a complete binary tree the number of nodes except the last level 2^(h-1) -1 where h is the height
-> find a method to find number of elements in last level
*/
const heightCBT = (root, h) => {
  if (!root) return h;
  return heightCBT(root.left, h + 1);
};

const isNodeExists = (idxTofind, height, node) => {
  let left = 0,
    right = 2 ** height - 1,
    count = 0;

  while (count < height) {
    const mid = Math.ceil((left + right) / 2);
    if (mid <= idxTofind) {
      node = node.right;
      left = mid;
    } else {
      node = node.left;
      right = mid - 1;
    }
    count++;
  }

  return node !== null;
};

const numberOfNodesCBT = (root) => {
  if (!root) return 0;
  const height = heightCBT(root);
  if (height === 0) return 1;
  const upperCount = 2 ** height;
  let left = 0,
    right = upperCount;
  while (left < right) {
    let indexTofind = Math.ceil((left + right) / 2);
    if (isNodeExists(root, indexTofind, height)) {
      left = indexTofind + 1;
    } else {
      right = indexTofind - 1;
    }
  }

  return upperCount + left + 1;
};
