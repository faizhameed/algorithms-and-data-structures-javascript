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

// optimizes
var maxScoreSightseeingPairOpt = function (values) {
  let res = 0,
    imax = 0;
  for (let i = 0; i < values.length; i++) {
    res = Math.max(res, imax + values[i] - i);
    imax = Math.max(imax, values[i] + i);
  }
  return res;
};

/* Count the best score in all previouse ssight seeing post */
var maxScoreSightseeingPair = function (values) {
  let res = 0,
    curr = 0;
  for (let i = 0; i < values.length; i++) {
    const a = values[i];
    res = Math.max(res, curr + a);
    curr = Math.max(curr, a) - 1; // we reduce by 1 at each iteration
  }
  return res;
};

function previousBest(values) {
  let prevBestIdx = 0,
    res = 0;

  for (let j = 1; j < values.length; j++) {
    res = Math.max(values[prevBestIdx] + prevBestIdx + values[j] - j, res);
    if (values[prevBestIdx] + prevBestIdx < values[j] + j) {
      prevBestIdx = j;
    }
  }
  return res;
}

const values = [8, 1, 5, 2, 6];

console.log(maxScoreSightseeingPair(values));
