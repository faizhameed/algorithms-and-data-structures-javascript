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
