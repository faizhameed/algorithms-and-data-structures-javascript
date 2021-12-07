var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const map = {};
  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) {
      map[t[i]]++;
    } else {
      map[t[i]] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]] || map[s[i]] <= 0) {
      return false;
    } else {
      map[s[i]]--;
    }
  }
  return true;
};
