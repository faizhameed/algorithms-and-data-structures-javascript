/* https://leetcode.com/problems/house-robber/submissions/ */

var rob = function (nums) {
  let set1 = 0,
    set2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      set1 += nums[i];
    } else {
      set2 += nums[i];
    }
  }
  return Math.max(set1, set2);
};
// issue here is will you be able to navigate to the best
// but what if you are having [2,1,1,2] here the best would be 4
