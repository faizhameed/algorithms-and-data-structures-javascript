var largestRectangleAreaBrute = function (heights) {
  const n = heights.length;

  let maxArea = 0;
  for (let i = 0; i < n; i++) {
    let currMin = heights[i];
    for (let j = i; j >= 0; j--) {
      currMin = Math.min(currMin, heights[j]);
      maxArea = Math.max(currMin * (i - j + 1), maxArea);
    }
  }
  return maxArea;
};

/* TODO: Stack Approach */
function largestRectangleArea(heights) {
  const stack = [-1];
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    // push all the index to the stack
    while (
      stack[stack.length - 1] !== -1 &&
      heights[stack[stack.length - 1]] >= heights[i]
    ) {
      const height = heights[stack.pop()];
      const right_limit = i;
      const left_limit = stack[stack.length - 1];
      maxArea = Math.max(maxArea, height * (right_limit - left_limit - 1));
    }
    stack.push(i);
  }
  while (stack[stack.length - 1] !== -1) {
    const height = heights[stack.pop()];
    const left_limit = stack[stack.length - 1];
    maxArea = Math.max(height * (heights.length - 1 - left_limit), maxArea);
  }
  return maxArea;
}

const heights = [1, 1];

console.log(largestRectangleArea(heights));
