var longestPalindrome = function (s) {
  if (s.length === 1) return s;
  // find the substing of s
  const res = [];

  function substring(s, start, end) {
    if (end === s.length) {
      return;
    }
    if (start > end) {
      return substring(s, 0, end + 1);
    }
    const subChar = s.slice(start, end + 1);
    if (isPalindrome(subChar)) {
      res.push(subChar);
    }
    return substring(s, start + 1, end);
  }
  function isPalindrome(s) {
    let first = 0,
      end = s.length - 1;
    while (first < end) {
      if (s[first] === s[end]) {
        first++;
        end--;
      } else {
        return false;
      }
    }
    return true;
  }

  substring(s, 0, 0);

  return res.reduce((a, v) => (a.length >= v.length ? a : v), res[0]);
};

console.log(longestPalindrome("babad"));
