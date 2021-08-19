/* https://leetcode.com/problems/house-robber/submissions/ */

var rob = function (nums) {
  const mapBest = [];
  let lastSelected = false;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      mapBest.push(nums[i]);
      lastSelected = true;
      continue;
    }
    if (i === 1) {
      if (nums[1] > nums[0]) {
        mapBest.push(nums[1]);
        lastSelected = true;
      } else {
        mapBest.push(nums[0]);
        lastSelected = false;
      }
      continue;
    }
    if (lastSelected) {
      if (mapBest[i - 1] >= mapBest[i - 2] + nums[i]) {
        mapBest.push(mapBest[i - 1]);
        lastSelected = false;
      } else {
        mapBest.push(mapBest[i - 2] + nums[i]);
        lastSelected = true;
      }
    } else {
      mapBest.push(mapBest[i - 1] + nums[i]);
      lastSelected = true;
    }
  }
  return mapBest[n - 1];
};
// issue here is will you be able to navigate to the best
// but what if you are having [2,1,1,2] here the best would be 4

console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 1, 1, 2])); // 4
console.log(rob([3, 1, 2, 3])); // 6
console.log(rob([3, 1, 2, 3, 2, 1, 4]));
