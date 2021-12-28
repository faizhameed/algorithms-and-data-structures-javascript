var kClosest = function (points, k) {
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

const points = [
    [3, 3],
    [5, -1],
    [-2, 4],
  ],
  k = 2;

console.log(kClosest(points, k));
