var pacificAtlantic = function (heights) {
  const m = heights.length,
    n = heights[0].length;
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const res = [],
    pacQ = [],
    atlQ = [];
  // Record all pacific and atlantic initial queues
  for (let i = 0; i < m; i++) {
    pacQ.push([i, 0]);
    atlQ.push([i, n - 1]);
  }
  for (let i = 0; i < n; i++) {
    pacQ.push([0, i]);
    atlQ.push([m - 1, i]);
  }
  // build all points from where it can flow to pacific and atlantic specifically
  const pacR = bfs(pacQ),
    atlR = bfs(atlQ);

  function bfs(queue) {
    const visited = {},
      curRes = new Array(m).fill(0).map(() => new Array(n).fill(false));
    while (queue.length) {
      const point = queue.shift();
      curRes[point[0]][point[1]] = true;
      for (let i = 0; i < directions.length; i++) {
        //move in all four directions if the next place is greater than the current point
        const row = point[0] + directions[i][0];
        const col = point[1] + directions[i][1];
        if (
          row < m &&
          col < n &&
          col >= 0 &&
          row >= 0 &&
          heights[row][col] >= heights[point[0]][point[1]] &&
          !visited[`${row}-${col}`]
        ) {
          visited[`${row}-${col}`] = true;
          queue.push([row, col]);
        }
      }
    }
    return curRes;
  }
  // record all intersection of pacific and atlantic
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacR[i][j] && atlR[i][j]) {
        res.push([i, j]);
      }
    }
  }

  return res;
};

const heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
console.log(pacificAtlantic(heights));
