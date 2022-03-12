function solution(t) {
  let sum = 0;
  function dfs(node) {
    if (node) {
      dfs(node.right);
      const val = node.val;
      node.val = sum;
      sum += val;
      dfs(node.left);
    }
    return node;
  }

  dfs(node);
  return t;
}
