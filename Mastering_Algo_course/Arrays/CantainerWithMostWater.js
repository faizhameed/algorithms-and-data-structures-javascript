/* https://leetcode.com/problems/container-with-most-water/ */

const maxArea = function (height) {
  //Brute force solution
  let maxArea = 0;

  for (let i = 1; i < height.length; i++) {
    for (let j = 0; j < i; j++) {
      const currentArea = (i - j) * Math.min(height[i], height[j]);
      maxArea = maxArea > currentArea ? maxArea : currentArea;
    }
  }
  return maxArea;
};

console.log(maxArea([4, 3, 2, 1, 4]));
