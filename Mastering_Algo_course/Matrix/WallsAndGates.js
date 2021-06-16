/* https://leetcode.com/problems/walls-and-gates/ */

var WallsAndGates = function (grid) {
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const WALL = -1;
  const GATE = 0;
  const gatesPos = [];
  if (grid.length === 0 || grid.length === 1) return grid;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === GATE) {
        gatesPos.push([row, col]);
      }
    }
  }
  const bfs = (startPos) => {
    const queue = [startPos];
    let steps = 0;
    while (queue.length) {
      const curPos = queue.shift();
      steps++;
      for (let j = 0; j < directions.length; j++) {
        curRow = curPos[0] + directions[j][0];
        curCol = curPos[1] + directions[j][1];
        if (
          curRow < 0 ||
          curRow >= grid.length ||
          curCol < 0 ||
          curCol >= grid[0].length ||
          grid[curRow][curCol] === GATE ||
          grid[curRow][curCol] === WALL
        )
          continue;
        queue.push([curRow, curCol]);
        grid[curRow][curCol] =
          !grid[curRow][curCol] ||
          (grid[curRow][curCol] && grid[curRow][curCol] > steps)
            ? steps
            : grid[curRow][curCol];
      }
    }
  };
  for (let i = 0; i < gatesPos.length; i++) {
    bfs(gatesPos[i]);
  }
  return grid;
};
