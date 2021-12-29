// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

var connect = function (root) {
  dfs(root, null);

  return root;
};

const dfs = (curr, next) => {
  if (!curr) return;
  curr.next = next;

  dfs(curr.left, curr.right);
  dfs(curr.right, curr.next === null ? null : curr.next.left);
};

/* BFS Method */

var connect = function (root) {
  if (root == null) return root;

  let leftMost = root;
  while (leftMost.left !== null) {
    let currHead = leftMost;

    while (currHead !== null) {
      currHead.left.next = currHead.right;
      if (currHead.next !== null) {
        currHead.right.next = currHead.next.left;
      }
      currHead = currHead.next;
    }
    leftMost = leftMost.left;
  }
  return root;
};
