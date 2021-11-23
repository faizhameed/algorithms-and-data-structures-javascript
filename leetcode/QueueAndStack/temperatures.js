/* https://leetcode.com/problems/daily-temperatures/submissions/ */

var dailyTemperaturesBrute = function (temperatures) {
  // brute force

  const ans = [];

  for (let i = 0; i < temperatures.length; i++) {
    let count = 0;
    const curr = temperatures[i];
    for (let j = i + 1; j < temperatures.length; j++) {
      if (curr < temperatures[j]) {
        count++;
        break;
      } else {
        count++;
      }
      if (j == temperatures.length - 1) {
        count = 0;
      }
    }
    ans.push(count);
  }
  return ans;
};

// optimized solution

var dailyTemperatures = function (temperatures) {
  const stack = [[temperatures[0], 0]];
  const ans = new Array(temperatures.length).fill(0);
  for (let i = 1; i < temperatures.length; i++) {
    const currTemp = temperatures[i];
    if (stack[stack.length - 1][0] > currTemp) {
      stack.push([currTemp, i]);
    } else {
      while (stack.length && stack[stack.length - 1][0] < currTemp) {
        const st = stack.pop();
        ans[st[1]] = i - st[1];
      }
      stack.push([temperatures[i], i]);
    }
  }
  return ans;
};

console.log(dailyTemperatures([30, 40, 50, 60]));
