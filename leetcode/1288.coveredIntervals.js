var removeCoveredIntervals = function (intervals) {
  intervals.sort(([a, b], [c, d]) => {
    if (a > c) {
      return 1;
    } else if (a < c) {
      return -1;
    } else if (c === a) {
      if (b < d) {
        return 1;
      } else {
        return -1;
      }
    }
  }); //sort in descending order of start interval

  // console.log(intervals)

  for (let i = 0; i < intervals.length - 1; i++) {
    if (isIntervalCovered(intervals[i + 1], intervals[i])) {
      [intervals[i + 1], intervals[i]] = [intervals[i], intervals[i + 1]];
      intervals[i] = null;
    }
  }

  return intervals.filter((v) => v !== null).length;

  function isIntervalCovered(int1, int2) {
    if (int2[0] <= int1[0] && int1[1] <= int2[1]) {
      return true;
    }
    return false;
  }
};

// less code iomplemntation

var removeCoveredIntervals = function (intervals) {
  intervals.sort(([a], [c]) => a - c); //sort in ascending order of start
  let left = -1,
    right = -1,
    res = 0;
  for (let i = 0; i < intervals.length - 1; i++) {
    if (left < intervals[i][0] && right < intervals[i][1]) {
      left = intervals[i][0];
      res++;
    }
    right = Math.max(right, intervals[i][1]);
  }

  return res;
};
