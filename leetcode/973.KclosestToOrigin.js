var kClosest1 = function (points, k) {
  const allPoints = [],
    map = [];
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    const distance = Math.sqrt(point[0] ** 2 + point[1] ** 2);
    map.push({ point, distance });
  }
  map.sort((a, b) => {
    if (a.distance > b.distance) return 1;
    return -1;
  });
  let j = 0;
  while (k > 0) {
    allPoints.push(map[j].point);
    j++;
    k--;
  }

  return allPoints;
};

// using MinPriorityQueue

const kClosest = (points, k) => {
  const pq = new MinPriorityQueue({ priority: (x) => x[0] }); // MinPriorityQueue to be defined
  let index = 0;
  for (const point of points) {
    const x1 = point[0];
    const x2 = point[1];
    const sqr = x1 * x1 + x2 * x2;
    pq.enqueue = [sqr, index];
    index++;
  }

  const result = [];
  for (let i = 0; i < k; i++) {
    const curr = pq.dequeue().element[1];
    result.push(points[curr]);
  }

  return result;
};

const points = [
    [3, 3],
    [5, -1],
    [-2, 4],
  ],
  k = 2;

console.log(kClosest(points, k));
