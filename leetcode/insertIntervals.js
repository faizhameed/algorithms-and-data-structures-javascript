var insert = function (intervals, newInterval) {
  if (intervals.length === 0) {
    intervals.push(newInterval);
    return intervals;
  }
  let minFound = false,
    maxFound = false;
  const result = [];
  for (let i = 0; i < intervals.length; i++) {
    const newMin = newInterval[0];
    const newMax = newInterval[1];
    const minCurr = intervals[i][0];
    const maxCurr = intervals[i][1];
    if (newMin > maxCurr) {
      result.push(intervals[i]);
    } else if (!minFound) {
      newInterval[i][0] = Math.min(minCurr, newMin);
      minFound = true;
      i--;
    } else if (newMax <= maxCurr && !maxFound) {
      maxFound = true;
      newInterval[1] = intervals[i][1];
      result.push(newInterval);
    } else if (
      newMax > intervals[i][1] &&
      newMax < intervals[i + 1][0] &&
      !maxFound
    ) {
      maxFound = true;
      result.push(newInterval);
    } else if (minCurr >= newMin && maxCurr <= newMax) {
      continue;
    } else {
      result.push(intervals[i]);
    }
  }

  return result;
};

const intervals = [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ],
  newInterval = [4, 8];

console.log(insert(intervals, newInterval));
