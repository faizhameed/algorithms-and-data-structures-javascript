function minSwaps(nums) {
  const n = nums.length;
  let ones = 0,
    maxOnesWindow = 0;

  for (const v of nums) {
    if (v === 1) ones++;
  }
  // console.log("ones", ones);
  let i = 0;
  for (i = 0; i < ones; i++) {
    if (nums[i] === 1) {
      maxOnesWindow++;
    }
  }
  // console.log("maxWindow", maxOnesWindow, i);
  let onesIncurrWindow = maxOnesWindow;
  for (; i < n + ones; i++) {
    onesIncurrWindow += nums[i % n] - nums[i - ones];
    maxOnesWindow = Math.max(onesIncurrWindow, maxOnesWindow);
    // console.log(currWindow);
  }
  return ones - maxOnesWindow;
}

//test =     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12]
const nums = [1, 1, 1, 0];

console.log(minSwaps(nums));
