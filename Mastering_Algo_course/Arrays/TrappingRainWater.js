/* https://leetcode.com/problems/trapping-rain-water/ */

const trap = (height) => {
  const arr = [];
  for (let i = 0; i < height.length; i++) {
    let total = 0;
    let maxRight = 0;
    let maxLeft = 0;
    let distRight = 0;
    let distLeft = 0;
    let left = i - 1,
      right = i + 1;
    while (left >= 0 || right <= height.length) {
      if (maxRight < height[right]) {
        maxRight = height[right];
        distRight = right;
      }
      if (maxLeft < height[left]) {
        maxLeft = height[left];
        distLeft = left;
      }
      left -= 1;
      right += 1;
    }
    total = Math.min(maxLeft, maxRight) - height[i];
    total = total >= 0 ? total : 0;
    arr.push(total);
  }
  return arr.reduce((a, i) => {
    return a + i;
  }, 0);
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
