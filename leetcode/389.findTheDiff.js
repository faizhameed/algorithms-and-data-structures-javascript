var findTheDifference = function (s, t) {
  const map = {};
  for (const k of s) {
    map[k] = map[k] === undefined ? (map[k] = 1) : (map[k] += 1);
  }
  for (const k of t) {
    if (map[k] && map[k] > 0) {
      map[k] -= 1;
      continue;
    }
    return k;
  }
};
