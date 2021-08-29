const removeOneToPalindrome = (s) => {
  const unMatched = {};

  const isPalindrome = function (s) {
    for (let i = 0, j = s.length - 1; j >= (s.length - 1) / 2; j--, i++) {
      if (s[i] !== s[j]) {
        unMatched[s[i]] = i;
        unMatched[s[j]] = j;
        return false;
      }
    }
    return true;
  };
  let falseCount = 0;
  if (isPalindrome(s)) {
    return true;
  }

  if (falseCount === 0) {
    falseCount = 1;
    for (const value of Object.values(unMatched)) {
      if (isPalindrome(s.slice(0, value) + s.slice(value + 1, s.length))) {
        return true;
      }
    }
  }
  return false;
};

//optimized solution

var validPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) {
      return (
        validSubPalindrome(s, start + 1, end) ||
        validSubPalindrome(s, start, end - 1)
      );
    }
    start++;
    end--;
  }
  return true;
};

var validSubPalindrome = function (s, start, end) {
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(removeOneToPalindrome("racacar"));
