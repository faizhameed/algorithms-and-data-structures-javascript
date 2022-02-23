// construct a top view of binary tree asked in oracle interview
function topView(root) {
  if (!root) return null;
  const m = new Map();
  const res = [];
  function traverse(root, dist, level) {
    if (!m.has(dist) || level < m.get(dist)[0]) {
      m.set(dist, [level, root.val]);
    }
    if (root.left) {
      traverse(root.left, dist - 1, level + 1);
    }
    if (root.right) {
      traverse(root.right, dist + 1, level + 1);
    }
  }
  traverse(root, 0, 0);

  const arr = Array.from(m);
  for (const [, val] of arr.values()) {
    res.push(val);
  }
  return res;
}
