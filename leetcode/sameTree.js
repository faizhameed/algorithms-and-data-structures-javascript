var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  let queue1 = [p];
  let queue2 = [q];

  while (queue1.length && queue2.length) {
    const curr1 = queue1.shift();
    const curr2 = queue2.shift();
    if (curr1.val !== curr2.val) {
      return false;
    }
    if ((curr1.left || curr2.left) && (!curr1.left || !curr2.left)) {
      return false;
    }
    if ((curr1.right || curr2.right) && (!curr1.right || !curr2.right)) {
      return false;
    }
    if (curr1.left) {
      queue1.push(curr1.left);
    }
    if (curr1.right) {
      queue1.push(curr1.right);
    }
    if (curr2.left) {
      queue2.push(curr2.left);
    }
    if (curr2.right) {
      queue2.push(curr2.right);
    }
  }
  if (queue1.length || queue2.length) {
    return false;
  }
  return true;
};

/* Optimized  */

var isTreeSame = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  return isTreeSame(p.left, q.left) && isTreeSame(p.right, q.right);
};
