var pairSum = function (head) {
  let i = 0,
    max = -Infinity,
    current = head;
  let n = 0;
  const map = {};
  while (current) {
    map[n] = current.val;
    n++;
    current = current.next;
  }
  current = head;
  while (i < n) {
    const twin = map[i] + map[n - 1 - i];
    max = Math.max(max, twin);
    i++;
  }
  return max;
};
