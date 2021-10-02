/* https://leetcode.com/problems/arithmetic-slices-ii-subsequence/ */

var maxNumberOfArthmeticSlices = (nums) => {
  const subsequence = [];
  const subsequenceArr = (arr, start, end) => {
    if (end === arr.length) {
      return;
    }
    if (start > end) {
      return subsequenceArr(arr, 0, end + 1);
    }
    subsequence.push(arr.slice(start, end + 1));
    return subsequenceArr(arr, start + 1, end);
  };

  const checkArthmetic = (arr) => {
    if (arr.length < 3) {
      return false;
    }
    const diff = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] !== diff) {
        return false;
      }
    }
    return true;
  };
  let count = 0;
  subsequenceArr(nums, 0, 0);
  console.log(subsequence);
  for (let i = 0; i < subsequence.length; i++) {
    if (checkArthmetic(subsequence[i])) {
      count++;
    }
  }
  return count;
};

const nums = [1, 2, 3];
console.log(maxNumberOfArthmeticSlices(nums));
