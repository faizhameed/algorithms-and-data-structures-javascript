var assignBikes = function (workers, bikes) {
  const getDist = ([x1, y1], [x2, y2]) => Math.abs(x1 - x2) + Math.abs(y1 - y2);

  const dists = [];
  for (let i = 0; i < workers.length; i++) {
    for (let j = 0; j < bikes.length; j++) {
      const d = getDist(workers[i], bikes[j]);
      if (dists[d] === undefined) dists[d] = [];
      dists[d].push([i, j]);
    }
  }
  const workerStatus = new Array(workers.length).fill(-1);
  const bikeStatus = new Array(bikes.length).fill(false);
  let pairCount = 0;
  while (pairCount < workers.length) {
    for (const bucket of dists) {
      if (bucket) {
        for (const [worker, bike] of bucket) {
          if (workerStatus[worker] === -1 && !bikeStatus[bike]) {
            workerStatus[worker] = bike;
            bikeStatus[bike] = true;
            pairCount++;
          }
        }
      }
    }
  }
  return workerStatus;
};
