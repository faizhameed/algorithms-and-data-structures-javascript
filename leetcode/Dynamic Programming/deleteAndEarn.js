/* Top Down Approach */
function deleteAndEarnFirst(nums) {
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

const nums = [1, 2, 1, 1, 4, 5, 5, 5, 6]; // expected 34

/* Better intuitive O(1) space */

function deleteAndEarn(nums) {
  let earn1 = 0,
    earn2 = 0;
  const map = {};
  nums.sort((a, b) => a - b);
  nums.forEach((v) => (map[v] ? (map[v] += 1) : (map[v] = 1)));
  nums = new Set(nums);
  let prev = undefined;
  for (const value of nums) {
    const currEarn = value * map[value];
    if (value === prev + 1) {
      const temp = earn2;
      earn2 = Math.max(currEarn + earn1, earn2);
      earn1 = temp;
    } else {
      const temp = earn2;
      earn2 = currEarn + earn2;
      earn1 = temp;
    }
    prev = value;
  }
  return earn2;
}

console.log(deleteAndEarnFirst(nums));
