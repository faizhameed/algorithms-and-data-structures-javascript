var minimumTime = function (time, totalTrips) {
  function binarySearch(mid) {
    let a = 0;
    for (const t of time) {
      a += Math.floor(mid / t);
    }
    return a;
  }

  let hi = 1000000000000;
  let low = 0;
  while (hi > low) {
    const mid = Math.floor(low + (hi - low) / 2);
    if (binarySearch(mid) >= totalTrips) {
      hi = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
};

const time = [1, 2, 3],
  totalTrips = 5;

console.log(minimumTime(time, totalTrips));
