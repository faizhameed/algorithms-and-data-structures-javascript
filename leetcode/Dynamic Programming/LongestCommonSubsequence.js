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

const longestCommonSubsequence = (t1, t2) => {
  const dp = [...Array(t1.length + 1)].map(() => Array(t2.length + 1).fill(0));
  console.log(dp);
};
longestCommonSubsequence("abc", "decs");
