function countSubstringBrute(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j <= s.length; j++) {
      if (i !== j) {
        const sub = s.substring(i, j);
        if (isPalindrome(sub)) count++;
      }
    }
  }
  return count;
}

function isPalindrome(str) {
  let i = 0,
    j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
}

/* Optimal method   using DP*/

function countSubstrings(s) {
  const n = s.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
  let count = 0;
  // fill all single char to true
  for (let i = 0; i < n; i++, count++) {
    dp[i][i] = true;
  }

  // fill all same double chars to true
  for (let i = 0; i < n - 1; i++) {
    dp[i][i + 1] = s[i] === s[i + 1];
    count += dp[i][i + 1];
  }

  // work from len >= 3
  for (let len = 3; len <= n; len++) {
    for (let i = 0, j = i + len - 1; j < n; j++, i++) {
      //if dp[i+1][j-1]is a palindrome the dp[i][j] is palindrom if s[i]==s[j]
      dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
      count += dp[i][j];
    }
  }
  return count;
}

console.log(countSubstrings("bbc"));
