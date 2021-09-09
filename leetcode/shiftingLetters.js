/* Brute Force */

const shiftingLetters = function (s, shifts) {
  const strArr = s.split("");
  const stringShift = (index, shiftCount) => {
    shiftCount = shiftCount % 26;

    for (let j = 0; j <= index; j++) {
      let curTotal = strArr[j].charCodeAt(0) + shiftCount;
      if (curTotal > 122) {
        curTotal = curTotal - 26;
      }
      strArr[j] = String.fromCharCode(curTotal);
    }
  };
  for (let i = 0; i < shifts.length; i++) {
    stringShift(i, shifts[i]);
  }
  return strArr.join("");
};

const s = "ruu",
  shifts = [26, 9, 17];
// console.log(shiftingLetters(s, shifts));

/* Optimized  */

const shiftingLettersOpt = function (s, shifts) {
  const strArr = s.split("");
  for (let i = shifts.length - 1; i >= 0; i--) {
    // fill up total count at each point starting backwards
    if (i !== shifts.length - 1) {
      shifts[i] += shifts[i + 1];
    }
    const shiftCount = shifts[i] % 26;
    let curTotal = strArr[i].charCodeAt(0) + shiftCount;
    if (curTotal > 122) {
      curTotal = curTotal - 26;
    }
    strArr[i] = String.fromCharCode(curTotal);
  }
  return strArr.join("");
};
console.log(shiftingLettersOpt(s, shifts));
