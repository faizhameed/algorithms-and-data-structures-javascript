var insert = function (intervals, newInterval) {
  if (intervals.length === 0) {
    intervals.push(newInterval);
    return intervals;
  }
  let isNewPushed = false;
  const result = [];
  function mergeInterval(newInterval) {
    if (!result.length) {
      result.push(newInterval);
    } else {
      const lastMin = result[result.length - 1][0];
      const lastMax = result[result.length - 1][1];
      if (lastMax < newInterval[0]) {
        result.push(newInterval);
      } else {
        const min = Math.min(newInterval[0], lastMin);
        const max = Math.max(newInterval[1], lastMax);
        result[result.length - 1] = [min, max];
      }
    }
  }
  for (let i = 0; i < intervals.length; i++) {
    const newMin = newInterval[0];
    const currMin = intervals[i][0];
    if (currMin < newMin) {
      result.push(intervals[i]);
    } else if (newMin <= currMin && !isNewPushed) {
      mergeInterval(newInterval);
      isNewPushed = true;
      i--;
    } else {
      mergeInterval(intervals[i]);
    }
  }
  if (!isNewPushed) {
    mergeInterval(newInterval);
  }

  return result;
};

const intervals = [[1, 5]],
  newInterval = [2, 7];

/* 
  failing 
  -3,0
  [17,23]
  [6,7]
  */

console.log(insert(intervals, newInterval));
