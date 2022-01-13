var findMinArrowShots = function (points) {
  points.sort((a, b) => a[1] - b[1]);

  let arrows = 1,
    lastPoint = points[0][1];

  for (let i = 1; i < points.length; i++) {
    const end = points[i][1];
    const start = points[i][0];
    if (start <= lastPoint && lastPoint <= end) {
      continue;
    }
    lastPoint = end;
    arrows++;
  }
  return arrows;
};

const points = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
];

console.log(findMinArrowShots(points));
