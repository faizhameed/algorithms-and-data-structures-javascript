var findRepeatedDnaSequences = function (s) {
  if (s.length < 10) return [];
  const res = [];

  let hashMap = {};

  let start = 0,
    end = 10;
  while (end <= s.length) {
    const curr = s.substring(start, end);
    if (hashMap[curr] && hashMap[curr] != -1) {
      hashMap[curr] = -1;
      res.push(curr);
    } else if (!hashMap[curr]) {
      hashMap[curr] = 1;
    }
    end++;
    start++;
  }
  return res;
};
