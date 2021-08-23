/* https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
 */

const findTarget = (root, k) => {
  if (!root) {
    return false;
  }
  let map = {};

  const queue = [root];
  while (queue.length) {
    const current = queue.shift();
    if (map[k - current.val]) {
      return true;
    }
    map[current.val] = true;
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return false;
};
