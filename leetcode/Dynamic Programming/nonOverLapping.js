var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  console.log(intervals);
  let count = 0;
  let preEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const currStart = intervals[i][0];
    const currEnd = intervals[i][1];
    if (preEnd > currStart) {
      count++;
      continue;
    }
    preEnd = currEnd;
  }
  return count;
};

const intervals = [
  [-52, 31],
  [-73, -26],
  [82, 97],
  [-65, -11],
  [-62, -49],
  [95, 99],
  [58, 95],
  [-31, 49],
  [66, 98],
  [-63, 2],
  [30, 47],
  [-40, -26],
];

console.log(eraseOverlapIntervals(intervals));
