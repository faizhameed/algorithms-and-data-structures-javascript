/* https://leetcode.com/explore/featured/card/september-leetcoding-challenge-2021/636/week-1-september-1st-september-7th/3960/ */

const nums = [0, 2, 1];
console.log(arrayNesting(nums));

function arrayNestedC() {
  const visited = new Set();
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (!visited.has(i)) {
      let count = 0;

      // start from current i if not visited
      let start = nums[i];

      // repeat until the cycle is found
      do {
        visited.add(start, true);
        start = nums[start];
        count++;
      } while (start !== nums[i]);

      // update the max length path
      max = Math.max(max, count);
    }
  }
  return max;
}
