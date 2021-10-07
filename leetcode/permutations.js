var permute = function (nums, curr = [], res = []) {
  if (curr.length === nums.length) {
    res.push(curr);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (curr.includes(nums[i])) continue;
    permute(nums, [...curr, nums[i]], res);
  }
  return res;
};

var permuteUnique = function (nums, curr = [], res = [], indexArr = []) {
  if (curr.length === nums.length) {
    if (!res.some((a) => curr.every((v, i) => v === a[i]))) {
      res.push(curr);
    }
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (indexArr.includes(i)) continue;
    permuteUnique(nums, [...curr, nums[i]], res, [...indexArr, i]);
  }
  return res;
};

var letterCasePermutation = function (s) {
  const signal = getArrayFromString(s);
  let size = s.length;
  const result = [];
  for (let i = 0; i < signal.length; i++) {
    const currSignal = [
      ...new Array(
        String(signal[signal.length - 1]).length - String(signal[i]).length
      ).fill(0),
      ...String(signal[i]).split(""),
    ];
    const currRes = [];
    let j = 0,
      k = 0;
    while (j < size) {
      if (isNaN(s[j])) {
        if (currSignal[k] == 1) {
          currRes.push(s[j].toUpperCase());
        } else {
          currRes.push(s[j].toLowerCase());
        }
        k++;
      } else {
        currRes.push(s[j]);
      }
      j++;
    }
    result.push(currRes.join(""));
  }
  return result;
};
function getArrayFromString(s) {
  s = s.toLowerCase();
  let countAlpha = 0;
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      countAlpha++;
    }
  }
  return getTotalPermutationsArray(countAlpha);
}

function getTotalPermutationsArray(n) {
  const result = [];
  /* from 0 to n digits converted to binary with ending n `1`s */
  // const binaryInt = getBinaryValueOf(n);
  let binaryVal = 0;
  for (let i = 0; i < n; i++) {
    binaryVal += 1 * Math.pow(10, i);
  }
  const totalPerm = getDecimalValueOf(binaryVal);
  for (let j = 0; j <= totalPerm; j++) {
    result.push(getBinaryValueOf(j));
  }
  return result;
}

function getBinaryValueOf(d) {
  if (d === 0) return 0;
  let q = d,
    remArr = [];
  while (q !== 0) {
    r = q % 2;
    q = Math.floor(q / 2);
    remArr.unshift(r);
  }
  return remArr.join("");
}

function getDecimalValueOf(b) {
  b = String(b);
  let DecimalVal = 0;
  for (let i = 0; i < b.length; i++) {
    DecimalVal += b[i] * Math.pow(2, b.length - 1 - i);
  }
  return DecimalVal;
}

console.log(letterCasePermutation("fa2iz"));
