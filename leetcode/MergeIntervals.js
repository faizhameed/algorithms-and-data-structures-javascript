/* Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input. */

var mergeIntervals = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
    return 1;
  });
  const res = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const size = res.length - 1;
    if (res[size][1] >= intervals[i][0]) {
      res[size][1] = Math.max(intervals[i][1], res[size][1]);
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
};

let intervals = [
  [1, 4],
  [0, 0],
];

console.log(mergeIntervals(intervals));
