function numKLenSubstrNoRepeats(s, k) {
  if (k > s.length) return 0;
  const n = s.length,
    map = {};
  let i = 0,
    j = 0,
    count = 0;

  while (j < n) {
    if (!isNaN(map[s[j]])) {
      while (i <= map[s[j]]) {
        map[s[i]] = undefined;
        i++;
      }
      map[s[j]] = j;
    } else {
      map[s[j]] = j;
      if (j - i + 1 === k) {
        count++;
        map[s[i]] = undefined;
        i++;
      }
    }
    j++;
  }
  return count;
}

console.log(numKLenSubstrNoRepeats("afaf", 2));
