/* 
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
*/

var romanToInt = function (s) {
  s = s.toUpperCase();
  const symbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  if (s.length === 1 && s === "I") {
    return 1;
  }
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) {
      count--;
      continue;
    }
    if (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) {
      count -= 10;
      continue;
    }
    if (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M")) {
      count -= 100;
      continue;
    }
    count += symbol[s[i]];
  }
  return count;
};

// const s = "MMCCCXCIX"
const s = "MMCCCXCix";
console.log(romanToInt(s));
