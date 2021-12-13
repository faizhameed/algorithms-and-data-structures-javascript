/* Top Down Approach */
function deleteAndEarn(nums) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
  }
  const arr = new Array(max + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    arr[nums[i]] += 1;
  }
  console.log(arr);
  const dp = new Array(arr.length).fill(-1);

  return solve(arr, 0, dp);
}

function solve(nums, idx, dp) {
  if (idx >= nums.length) {
    return 0;
  }
  if (dp[idx] !== -1) {
    return dp[idx];
  }

  return (dp[idx] = Math.max(
    solve(nums, idx + 1, dp),
    nums[idx] * idx + solve(nums, idx + 2, dp)
  ));
}

const nums = [1, 1, 1, 2, 4, 5, 5, 5, 6]; // expected 34

console.log(deleteAndEarn(nums));
