/* https://leetcode.com/problems/best-sightseeing-pair/ */

var maxScoreSightseeingPairBrute = function (values) {
  let max = 0;
  for (let i = 0; i < values.length - 1; i++) {
    for (let j = i + 1; j < values.length; j++) {
      max = Math.max(values[i] + values[j] + i - j, max);
    }
  }
  return max;
};

const values = [8, 1, 5, 2, 6];

console.log(maxScoreSightseeingPair(values));
