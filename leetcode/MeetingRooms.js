var canAttendMeetings = function (intervals) {
  // sorted according to start time
  intervals.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    return -1;
  });
  let prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i];
    if (prev[1] > curr[0]) {
      return false;
    }
    prev = curr;
  }
  return true;
};

const intervals = [
  [0, 30],
  [60, 90],
  [95, 20],
];

console.log(canAttendMeetings(intervals));
