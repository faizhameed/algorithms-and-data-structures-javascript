/* Given a binary array nums, return the maximum number of consecutive 1's in the array. */

var findMaxConsecutiveOnes = function (nums) {
  let maxOnes = 0,
    currentCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount++;
    } else {
      currentCount = 0;
    }
    if (currentCount > maxOnes) {
      maxOnes = currentCount;
    }
  }
  return maxOnes;
};

console.log(findMaxConsecutiveOnes([1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1]));
