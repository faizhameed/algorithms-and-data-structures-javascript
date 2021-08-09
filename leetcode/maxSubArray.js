/* https://leetcode.com/problems/maximum-subarray/ */
const maxSubArray = (nums) => {
  let currSum = 0,
    max = Math.max(...nums);

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    currSum += val;
    if (currSum > max) {
      max = currSum;
    }
    if (currSum < 0) {
      //reset currSum
      currSum = 0;
    }
  }
  return max;
};

console.log(maxSubArray([-1, -2, -5, 6]));
/* divide and conquer approach*/
