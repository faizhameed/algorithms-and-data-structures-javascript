/* Brute Force */

var countBinarySubstringsBrute = function (s) {
  let subCount = 0;
  const sub = [];
  let i = 0,
    j = 1;
  while (i < s.length) {
    if (isValid(s, i, j)) {
      subCount++;
      sub.push(s.substring(i, j));
      i++;
      j = i + 1;
      continue;
    }
    j++;
    if (j > s.length) {
      i++;
      j = i + 1;
    }
  }
  return subCount;
};

function isValid(s, i, j) {
  // equal number of 0s and 1s
  // all grouped to gether
  count = 0;
  const currStr = s.substring(i, j);
  let prev = currStr[0];
  let index = 0;
  while (index < currStr.length) {
    if (currStr[index] === prev) {
      count++;
      index++;
    } else {
      break;
    }
  }

  while (index < currStr.length) {
    if (currStr[index] !== prev) {
      count--;
      index++;
    } else {
      return false;
    }
  }

  return count === 0;
}

/* Alternate implementation */

const countBinarySubstrings = (s) => {
  const groups = [];
  if (s == "") return 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      groups.push(1);
    } else {
      groups[groups.length - 1]++;
    }
  }
  let ans = 0;

  for (let i = 1; i < groups.length; i++) {
    ans += Math.min(groups[i - 1], groups[i]);
  }
  return ans;
};

console.log(countBinarySubstrings("0011", 1, 3));
