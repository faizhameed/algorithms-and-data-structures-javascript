/* https://leetcode.com/problems/backspace-string-compare/ */

const backSpaceCompare = function (s, t) {
  let sArr = s.split("").reverse();
  let tArr = t.split("").reverse();
  let backspace = 0;
  for (let i = 0; i < sArr.length; i++) {
    const str = sArr[i];
    if (str === "#") {
      backspace++;
      sArr.splice(i, 1);
      i--;
      continue;
    }
    if (backspace && str !== "#") {
      sArr.splice(i, 1);
      backspace--;
      i--;
    }
  }
  backspace = 0;
  for (let i = 0; i < tArr.length; i++) {
    const str = tArr[i];
    if (str === "#") {
      backspace++;
      tArr.splice(i, 1);
      i--;
      continue;
    }
    if (backspace && str !== "#") {
      tArr.splice(i, 1);
      backspace--;
      i--;
    }
  }
  sArr = sArr.reverse().join("");
  tArr = tArr.reverse().join("");

  return sArr === tArr;
};

// optimatl Solution

const backSpaceCompareOptimal = (s, t) => {
  let i = s.length - 1;
  let j = t.length - 1;
  let bckS = 0,
    bckT = 0;
  while (i >= 0 || j >= 0) {
    if (s[i] === "#") {
      bckS++;
      i--;
      continue;
    }
    if (t[j] === "#") {
      bckT++;
      j--;
      continue;
    }
    if (bckS > 0 && s[i] !== "#") {
      bckS--;
      i--;
      continue;
    }
    if (bckT > 0 && t[j] !== "#") {
      bckT--;
      j--;
      continue;
    }
    if (s[i] !== t[j]) {
      return false;
    }
    i--;
    j--;
  }
  return true;
};
console.log(backSpaceCompareOptimal("ab##", "c#d#"));
