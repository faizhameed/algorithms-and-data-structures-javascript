function mergeIntervals(intervals, interval) {
  const res = [interval];
  for (let i = 0; i < intervals.length; i++) {
    if (overlap(intervals[i], res[0])) {
      res[0][0] = Math.min(intervals[i][0], res[0][0]);
      res[0][1] = Math.max(intervals[i][1], res[0][1]);
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
}

function overlap(int1, int2) {
  if (
    (int1[0] >= int2[0] && int1[0] <= int2[1]) ||
    (int1[1] >= int2[0] && int1[1] <= int2[1]) ||
    (int2[0] >= int1[0] && int2[0] <= int1[1]) ||
    (int2[1] >= int1[0] && int2[1] <= int1[1])
  ) {
    return true;
  }
  return false;
}
