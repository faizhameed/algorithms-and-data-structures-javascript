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

  substring(s, 0, 0);

  return res.reduce((a, v) => (a.length >= v.length ? a : v), res[0]);
};
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

const longestPalindromeOpt = (s) => {
  const pal = [];
  const n = s.length;
  for (let start = 0; start < n; start++) {
    for (let end = n - 1; end >= start; end--) {
      if (s[start] === s[end] && isPalindrome(s.slice(start, end + 1))) {
        pal.push(s.slice(start, end + 1));
        break;
      }
    }
  }

  return pal.reduce((a, v) => (a.length >= v.length ? a : v), pal[0]);
};

/* further optimized solution */

const longestPalindromeOptEven = (s) => {
  if (s.length <= 1) return s;
  let start = 0,
    end = 0;

  for (let i = 0; i < s.length; i++) {
    let len1 = expandFromCenter(s, i, i);
    let len2 = expandFromCenter(s, i, i + 1);
    const len = Math.max(len1, len2);
    if (len > end - start) {
      start = Math.ceil(i - (len - 1) / 2);
      end = Math.floor(i + len / 2);
    }
  }
  return s.slice(start, end + 1);

  function expandFromCenter(s, l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }

    return r - l - 1;
  }
};

console.log(longestPalindromeOptEven("babaaabbaa"));
