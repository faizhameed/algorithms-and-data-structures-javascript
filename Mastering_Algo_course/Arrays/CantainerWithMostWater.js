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

const maxArea2 = function (height) {
  //Optimized solution
  let maxArea = 0;
  let i = 0,
    j = height.length - 1;
  while (i < j) {
    const left = height[i];
    const right = height[j];

    maxArea = Math.max(maxArea, (j - i) * Math.min(left, right));
    if (left < right) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
};

console.log(maxArea2([4, 3, 2, 1, 4]));
