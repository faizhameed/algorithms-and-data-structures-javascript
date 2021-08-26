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

const trapOptimized = (height) => {
  let p1 = 0,
    p2 = height.length - 1;
  let total = 0,
    maxLeft = 0,
    maxRight = 0;

  while (p1 < p2) {
    if (height[p1] <= height[p2]) {
      if (height[p1] > maxLeft) {
        maxLeft = height[p1];
      } else {
        total += maxLeft - height[p1];
      }
      p1++;
    } else {
      if (height[p2] > maxRight) {
        maxRight = height[p2];
      } else {
        total += maxRight - height[p2];
      }
      p2--;
    }
  }
  return total;
};

// Dynamic programming solution
const trapDP = (a) => {
  let n = a.length;
  if (n == 0) return 0;
  let left = Array(n).fill(0); // left[i]: height of tallest bar from 0 till i
  let right = Array(n).fill(0); // right[i]: height of tallest bar from i till n - 1
  left[0] = a[0];
  right[n - 1] = a[n - 1];
  for (let i = 1; i < n; i++) left[i] = Math.max(left[i - 1], a[i]); // fill left array of tallest bar from start
  for (let i = n - 2; ~i; i--) right[i] = Math.max(right[i + 1], a[i]); // fill right array of tallest bar from end
  let res = 0;
  for (let i = 0; i < n; i++) res += Math.min(left[i], right[i]) - a[i]; // add each index water
  return res;
};

console.log(trapDP([1, 1, 2, 1, 23]));
