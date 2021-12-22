var obstaclesTraverse = function () {
  const queue = [[0, 0]]; // first coordinates to traverse
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let count = 0;
  const visited = {};
  while (queue.length) {
    const curr = queue.shift();
    for (let d = 0; d < directions.length; d++) {
      const x = curr[0] + directions[d][0];
      const y = curr[1] + directions[d][1];

      if (!isObstacle(x, y) && !visited[`${x}-${y}`]) {
        // valid
        count++;
        queue.push([x, y]);
        visited[`${x}-${y}`] = true;
      }
    }
  }
  return count;
};

function isObstacle(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  let total = Number(x + "" + y);
  let sum = 0;
  while (total) {
    sum += total % 10;
    total = Math.floor(total / 10);
    if (sum > 21) return true;
  }
  return false;
}

console.log(obstaclesTraverse());
