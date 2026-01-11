const longestPalindromicSubString = (s) => {
  const n = s.length;
  // Create a DP Array
  let start = 0;
  let maxLength = 1;

  const dp = Array.from({ length: n }, () => Array(n).fill(false));

  // Base case

  for (let i = 0; i < n; i++) dp[i][i] = true;

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      let j = len + i - 1;

      if (s[i] === s[j]) {
        if (len === 2 || dp[i + 1][j - 1]) {
          dp[i][j] = true;

          if (maxLength < len) {
            maxLength = len;
            start = i;
          }
        }
      }
    }
  }

  return s.substring(start, start + maxLength);
};

console.log(longestPalindromicSubString("bb"));
