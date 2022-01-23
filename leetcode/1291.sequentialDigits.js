/* Brute Force */

var sequentialDigitsBrute = function (low, high) {
  const res = [];
  for (let i = low; i < high; i++) {
    let temp = i + "";
    let flag = true;
    for (let j = 1; j < temp.length; j++) {
      if (parseInt(temp[j - 1]) + 1 !== parseInt(temp[j])) {
        flag = false;
        break;
      }
    }
    if (flag) {
      res.push(i);
    }
  }
  return res;
};
var sequentialDigits2 = function (low, high) {
  const res = [];
  const sample = "123456789";
  let start = (low + "").length;
  let end = (high + "").length;
  for (let i = 0; i < 9; i++) {
    for (let j = i; j < 9; j++) {
      if (j - i >= start - 1 && j - i <= end) {
        const num = parseInt(sample.substring(i, j + 1));
        if (num >= low && num <= high) {
          res.push(num);
        }
      }
    }
  }
  //instead of sorting here we can adjust this when building
  return res.sort((a, b) => a - b);
};

var sequentialDigits3 = function (low, high) {
  const res = [];
  const sample = "123456789";
  let start = (low + "").length;
  let end = (high + "").length;
  for (let i = start; i < end + 1; i++) {
    for (let j = 0; j < 10 - i; j++) {
      const num = parseInt(sample.substring(j, j + i));
      if (num >= low && num <= high) {
        res.push(num);
      }
    }
  }

  return res;
};

console.log(sequentialDigits3(10, 1000000000));
