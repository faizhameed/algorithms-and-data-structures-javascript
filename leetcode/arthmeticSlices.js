var numberOfArithmeticSlices = function (nums) {
  const diff = [];
  for (let i = 1; i < nums.length; i++) {
    diff.push(nums[i - 1] - nums[i]);
  }
  let prevCount = 0,
    count = 0;
  const dp = {};
  for (let i = 0; i < diff.length + 1; i++) {
    const currDiff = diff[i];
    const prevDiff = diff[i - 1];
    if (prevDiff !== currDiff) {
      //now we have a new diff so lets reset and add the count
      if (prevCount >= 2) {
        // if prevCount greater than two then only we have atleast three subarray
        count += arthemeticCount(prevCount);
      }
      prevCount = 0;
    }
    prevCount++;
  }

  function arthemeticCount(n) {
    if (n === 2) {
      return 1;
    }
    if (dp[n]) {
      return dp[n];
    }
    dp[n] = arthemeticCount(n - 1) + n - 1;
    return dp[n];
  }
  return count;
};

/* ALTERNATE BEST */
function arthemeticCountOpt(nums) {
  let sum = 0,
    dp = Array(nums.length).fill(0);

  for (var i = 2; i <= dp.length - 1; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      dp[i] = 1 + dp[i - 1];
      sum += dp[i];
    }
  }

  return sum;
}
const nums = [1, 2, 3, 4, 6, 8, 10];

console.log(numberOfArithmeticSlices(nums));
