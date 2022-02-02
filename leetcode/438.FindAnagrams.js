var findAnagramsBrute = function (s, p) {
  const n = p.length;
  const pMap = {};
  for (const l of p) {
    pMap[l] ? (pMap[l] += 1) : (pMap[l] = 1);
  }
  const res = [];
  for (let i = 0; i < s.length - n + 1; i++) {
    const l = s[i];
    if (pMap[l] && isAnagram(s.substring(i, i + n), pMap, n)) {
      res.push(i);
    }
  }
  return res;
};

function isAnagram(s1, s2M, n) {
  console.log(s1);
  if (s1.length !== n) return false;
  const s1M = {};
  for (let i = 0; i < s1.length; i++) {
    const cur1 = s1[i];
    if (s1M[cur1]) {
      s1M[cur1] += 1;
    } else {
      s1M[cur1] = 1;
    }
  }

  for (const [key, val] of Object.entries(s1M)) {
    if (s2M[key] !== val) return false;
  }
  return true;
}

/* Optimized Version */

var findAnagrams = function (s, p) {
  const n = p.length;
  const pMap = {};
  for (const l of p) {
    pMap[l] ? (pMap[l] += 1) : (pMap[l] = 1);
  }
  const res = [];
  let left = 0,
    right = 0,
    count = n;

  while (right < s.length) {
    if (pMap[s[right]] > 0) count--;

    pMap[s[right]]--;
    right++;

    if (count === 0) {
      res.push(left);
    }
    if (right - left === p.length) {
      // reverse whatever done above by one step to move forward
      if (pMap[s[left]] >= 0) count++;

      pMap[s[left]]++;
      left++;
    }
  }
  return res;
};

const s = "cbaebabacd",
  p = "abc";

console.log(findAnagrams(s, p));
