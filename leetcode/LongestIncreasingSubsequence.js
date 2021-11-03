var lengthOfLISBrute = function (nums) {
  let count = 0;
  var backTrack = function (nums, index = 0, curr = []) {
    count = Math.max(curr.length, count);
    if (count > nums.length - index + curr.length) {
      return;
    }
    for (let i = index; i < nums.length; i++) {
      if (curr.length > 0) {
        if (curr[curr.length - 1] < nums[i]) {
          backTrack(nums, i + 1, [...curr, nums[i]]);
        }
      } else {
        backTrack(nums, i + 1, [nums[i]]);
      }
    }
  };
  backTrack(nums);
  return count;
};

/* DP solution */

var lengthOfLISDP = function (nums) {
  const dp = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[j] + 1, dp[i]);
    }
  }

  return Math.max(...dp);
};

/* Build sequence intelligently */

var lengthOfLIS = function (nums) {
  const sub = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    if (sub[sub.length - 1] < curr) {
      sub.push(curr);
    } else {
      // instead of loop again you can binary search and replace the value since sub is always sorted
      let j = 0;
      while (curr > sub[j]) {
        j++;
      }
      sub[j] = curr;
    }
  }

  return sub;
};

console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]));
