// const longestCommonSubsequence = (text1, text2) => {
//   const text1Arr = text1.split("");
//   const text2Arr = text2.split("");
//   let currentMax = 0;
//   let maxCount = 0;
//   let lastPoint = 0;
//   for (let h = 0; h < text1Arr.length; h++) {
//     const char1 = text1Arr[h];
//     for (let i = 0; i < text2Arr.length; i++) {
//       const char2 = text2Arr[i];
//       if (char1 === char2 && i > lastPoint) {
//         lastPoint = i;
//         currentMax += 1;
//       }
//     }
//   }
//   return maxCount;
// };

const lsc_brute = (t1, t2, m, n) => {
  // long brute method

  if (m === 0 || n === 0) {
    return 0;
  }
  if (t1[m - 1] === t2[n - 1]) {
    return 1 + lsc_brute(t1, t2, m - 1, n - 1);
  }
  return Math.max(lsc_brute(t1, t2, m - 1, n), lsc_brute(t1, t2, m, n - 1));
};
console.log(lsc_brute("abc", "abs", 3, 4));

// short opt method
const lsc_opt = (t1, t2) => {
  const dp = [...Array(t1.length + 1)].map(() => Array(t2.length + 1).fill(0));

  for (let i = 1; i < t1.length + 1; i++) {
    for (let j = 1; j < t2.length + 1; j++) {
      if (t1[i - 1] === t2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[t1.length][t2.length];
};
console.log(lsc_opt("abc", "abs", 3, 4));
