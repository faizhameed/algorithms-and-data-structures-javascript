/* Consider this as a  graph */
var copyRandomList = function (head) {
  if (!head) return null;
  const seen = new Map();
  function dfs(node) {
    if (!node) {
      return null;
    }
    if (seen.has(node)) {
      return seen.get(node);
    }
    const newNode = new Node(node.val);
    seen.set(node, newNode);
    newNode.next = dfs(node.next);
    newNode.random = dfs(node.random);
    return newNode;
  }

  return dfs(head);
};
