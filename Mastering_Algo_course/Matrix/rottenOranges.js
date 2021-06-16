var orangesRotting = function (grid) {
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const ROTTEN = 2;
  const FRESH = 1;
  let minutesTaken = 0;
  let freshOranges = 0;
  const queue = [];
  if (grid.length === 0) return 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === FRESH) freshOranges++;
      else if (grid[row][col] === ROTTEN) queue.push([row, col]);
    }
  }
  let queueLength = queue.length;
  while (queue.length) {
    if (queueLength === 0) {
      minutesTaken++;
      queueLength = queue.length;
    }
    const rottenPos = queue.shift();
    queueLength--;
    for (let i = 0; i < directions.length; i++) {
      const curPos = directions[i];
      const curRow = curPos[0] + rottenPos[0];
      const curCol = curPos[1] + rottenPos[1];
      if (
        curRow < 0 ||
        curRow >= grid.length ||
        curCol < 0 ||
        curCol >= grid[0].length ||
        grid[curRow][curCol] !== FRESH
      ) {
        continue;
      }
      queue.push([curRow, curCol]);
      grid[curRow][curCol] = 2;
      freshOranges--;
    }
  }

  if (freshOranges) return -1;

  return minutesTaken;
};
