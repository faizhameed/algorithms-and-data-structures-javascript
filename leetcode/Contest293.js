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

var maxConsecutive2 = function (bottom, top, special) {
  let max = 0;

  const specialMap = {};

  for (const v of special) {
    specialMap[v] = true;
  }
  let curr = 0;
  for (let i = bottom; i <= top; i++) {
    if (!specialMap[i]) {
      curr++;
    }
    max = Math.max(max, curr);
    if (specialMap[i]) {
      curr = 0;
    }
  }
  return max;
};
//accepted
var maxConsecutive = function (bottom, top, special) {
  special.sort((a, b) => a - b);
  let max = 0,
    i = bottom,
    j = 0;
  while (i <= top) {
    max = Math.max(max, special[j] - i);
    i = special[j] + 1;
    j++;
    if (j === special.length) break;
  }
  if (i <= top) {
    max = Math.max(max, top + 1 - i);
  }

  return max;
};

const bottom = 6,
  top = 8,
  special = [7, 6, 8];

console.log(maxConsecutive(bottom, top, special));

console.log(0 & 17);

var largestCombination = function (candidates) {
  let max = 1;
  let comb = 0;
  let curr = candidates[0],
    j = 0;
  while (j < candidates.length) {
    if ((curr & candidates[j]) === 0) {
      j++;
      continue;
    }
    comb++;
    curr &= candidates[j];
    max = Math.max(comb, max);
    j++;
  }

  return max;
};

var largestCombination = function (candidates) {
  let max = 1;
  let comb = 0;
  for (let i = 0; i < candidates.length; i++) {
    let curr = candidates[i],
      j = i;
    while (j < candidates.length) {
      if ((curr & candidates[j]) === 0) {
        j++;
        continue;
      }
      comb++;
      curr &= candidates[j];
      max = Math.max(comb, max);
      j++;
    }
    comb = 0;
  }

  return max;
};
