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

const lsc = (t1, t2, m, n) => {
  // long brute method

  if (m === 0 || n === 0) {
    return 0;
  }
  if (t1[m - 1] === t2[n - 1]) {
    return 1 + lsc(t1, t2, m - 1, n - 1);
  }
  return Math.max(lsc(t1, t2, m - 1, n), lsc(t1, t2, m, n - 1));
};
console.log(lsc("abc", "abs", 3, 4));
