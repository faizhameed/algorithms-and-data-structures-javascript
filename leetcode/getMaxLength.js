/* https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/

*/
var getMaxLen = function (nums) {
  let pSl = 0,
    nSl = 0,
    max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      pSl = nSl = 0;
    } else if (nums[i] > 0) {
      pSl++;
      if (nSl > 0) nSl++;
    } else {
      const temp = pSl;

      pSl = nSl > 0 ? nSl + 1 : 0;
      nSl = temp + 1;
    }
    max = Math.max(pSl, max);
  }
  return max;
};
/* 
failing test cases
[1, 0, 2, 3]
[-1, 0, 2, 3]
[0,1,-2,-3,-4]
[-1,2]
*/
const nums = [0, 1, 2, 2, 5];

console.log(getMaxLen(nums));
