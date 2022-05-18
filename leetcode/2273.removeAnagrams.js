var removeAnagrams = function (words) {
  const n = words.length;
  function isAnagram(x, y) {
    if (x.length != y.length) return false;
    const map = {};

    for (const l of x) {
      if (!map[l]) {
        map[l] = 0;
      }
      map[l] += 1;
    }

    for (const l of y) {
      if (!map[l]) return false;
      map[l] -= 1;
    }
    return true;
  }

  let j = n - 1;
  while (j > 0) {
    if (isAnagram(words[j], words[j - 1])) {
      words.splice(j, 1);
    }
    j--;
  }
  return words;
};
