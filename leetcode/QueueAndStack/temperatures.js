/* https://leetcode.com/problems/daily-temperatures/submissions/ */

var dailyTemperatures = function (temperatures) {
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
