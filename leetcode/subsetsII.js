/* Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

Input: nums = [0]
Output: [[],[0]]
Tobesolved
*/

const subset = (nums, start = 0, end = 0, result = []) => {
  if (end >= nums.length) return [...[[]], ...result];
  if (start > end) {
    return subset(nums, 0, end + 1, result);
  }
  result.push(nums.slice(start, end + 1));
  return subset(nums, start + 1, end, result);
};

console.log(subset([1, 2, 3]));
