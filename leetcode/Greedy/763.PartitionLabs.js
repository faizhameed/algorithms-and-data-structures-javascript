var partitionLabels = function (s) {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    map[l] = i;
  }
  const res = [];
  let j = 0,
    anchor = 0;
  for (let i = 0; i < s.length; i++) {
    j = Math.max(j, map[s[i]]);
    if (i === j) {
      res.push(i - anchor + 1);
      anchor = i + 1;
    }
  }
  return res;
};
