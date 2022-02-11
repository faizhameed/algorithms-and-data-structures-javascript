var checkInclusionBrute = function (s1, s2) {
  const map = {};

  for (let i = 0; i < s1.length; i++) {
    if (map[s1[i]]) {
      map[s1[i]] += 1;
    } else {
      map[s1[i]] = 1;
    }
  }
  let left = 0,
    right = s1.length - 1;

  while (right < s2.length) {
    const str = s2.substring(left, right + 1);
    const strMap = {};
    for (let i = 0; i < str.length; i++) {
      if (strMap[str[i]]) {
        strMap[str[i]] += 1;
      } else {
        strMap[str[i]] = 1;
      }
    }
    let flag = true;
    Object.keys(map).forEach((key) => {
      if (map[key] !== strMap[key]) {
        flag = false;
      }
    });
    if (flag) {
      return true;
    }
    left++;
    right++;
  }
  return false;
};

/* Optimized solution */
var checkInclusion = function (s1, s2) {
  const l1 = s1.length;
  const l2 = s2.length;
  const arr = new Array(26).fill(0);
  for (let i = 0; i < l1; i++) {
    arr[s1.charCodeAt(i) - 97]++;
    arr[s2.charCodeAt(i) - 97]--;
  }
  if (allZero(arr)) return true;

  for (let i = l1; i < l2; i++) {
    arr[s2.charCodeAt(i) - 97]--;
    arr[s2.charCodeAt(i - l1) - 97]++;
    if (allZero(arr)) return true;
  }
  return allZero(arr);
};

function allZero(count) {
  for (let i = 0; i < 26; i++) {
    if (count[i] !== 0) return false;
  }
  return true;
}
const s1 = "ab",
  s2 = "eidbaooo";

console.log(checkInclusion(s1, s2));
