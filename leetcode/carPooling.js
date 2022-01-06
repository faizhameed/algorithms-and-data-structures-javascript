var carPooling = function (trips, capacity) {
  const tripSet = {};
  /* 
    0 capac
    1 from +
    2 to -
    */
  let passengers = 0,
    maxPoint = 0;
  for (let i = 0; i < trips.length; i++) {
    const curr = trips[i];
    const passengers = curr[0];
    const from = curr[1];
    const to = curr[2];
    if (tripSet[from]) {
      tripSet[from] += passengers;
    } else {
      tripSet[from] = passengers;
    }
    if (tripSet[to]) {
      tripSet[to] -= passengers;
    } else {
      tripSet[to] = -passengers;
    }
    maxPoint = Math.max(maxPoint, to);
  }
  for (let i = 0; i <= maxPoint; i++) {
    if (tripSet[i]) {
      passengers += tripSet[i];
      if (passengers > capacity) {
        return false;
      }
    } else {
      continue;
    }
  }

  console.log(tripSet, maxPoint);
  return true;
};
const trips = [
    [2, 1, 5],
    [3, 3, 7],
  ],
  capacity = 4;
console.log(carPooling(trips, capacity));
