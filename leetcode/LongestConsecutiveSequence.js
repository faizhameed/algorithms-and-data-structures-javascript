var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  nums.sort((a, c) => a - c);

  let count = 1,
    max = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      continue;
    }
    if (nums[i - 1] + 1 === nums[i]) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 1;
    }
  }
  max = Math.max(max, count);
  return max;
};

const nums = [0, 3, 7, 2, 2, 5, 8, 4, 1, 6, 0, 1];
console.log(longestConsecutive(nums));

/* O(N) space O(N)time */

var longestConsecutive = function (nums) {
  const map = {};
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = true;
    }
  }

  for (const num in nums) {
    if (!map[num - 1]) {
      let currCount = 1;
      let currentNum = num;
      while (map[currentNum + 1]) {
        currCount++;
        currentNum++;
      }
      Math.max(max, currCount);
    }
  }
  return max;
};
