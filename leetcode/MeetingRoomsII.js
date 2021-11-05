/* Given an array of meeting time intervals intervals where
intervals[i] = [starti, endi], return the minimum number of conference rooms required. */

var minMeetingRooms = function (intervals) {
  if (intervals.length === 0) {
    return 0;
  }

  const start = intervals.map((v) => v[0]).sort((a, b) => a - b);
  const end = intervals.map((v) => v[1]).sort((a, b) => a - b);

  let s = 0,
    e = 0,
    usedRooms = 0;
  while (s < intervals.length) {
    if (start[s] >= end[e]) {
      usedRooms--;
      e++;
    }

    usedRooms++;
    s++;
  }
  return usedRooms;
};

const intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];

console.log(minMeetingRooms(intervals));
