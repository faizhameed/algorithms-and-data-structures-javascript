var wallsAndGatesUnfinished = function (rooms) {
  const gates = [];
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[0].length; j++) {
      if (rooms[i][j] === 0) {
        gates.push([i, j]);
      }
    }
  }
  for (let g = 0; g < gates.length; g++) {
    //O(g)
    bfs(gates[g]);
  }

  function bfs(gate) {
    // O(n)
    const stack = [gate];
    const visited = new Array(rooms.length)
      .fill(0)
      .map(() => new Array(rooms[0].length).fill(false));
    while (stack.length) {
      const curr = stack.pop();

      for (let d = 0; d < directions.length; d++) {
        const row = curr[0] + directions[d][0];
        const col = curr[1] + directions[d][1];
        const count = rooms[curr[0]][curr[1]];

        if (
          row >= 0 &&
          col >= 0 &&
          row < rooms.length &&
          col < rooms[0].length &&
          rooms[row][col] > 0 &&
          !visited[row][col]
        ) {
          // valid
          visited[row][col] = true;
          rooms[row][col] = Math.min(rooms[row][col], count + 1);
          stack.push([row, col]);
        }
      }
    }
  }
  return rooms;
};
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
  const gates = [],
    EMPTY = 2147483647;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[0].length; j++) {
      if (rooms[i][j] === 0) {
        gates.push([i, j]);
      }
    }
  }
  while (gates.length) {
    const curr = gates.shift();

    for (let d = 0; d < directions.length; d++) {
      const row = curr[0] + directions[d][0];
      const col = curr[1] + directions[d][1];
      const count = rooms[curr[0]][curr[1]];

      if (
        row >= 0 &&
        col >= 0 &&
        row < rooms.length &&
        col < rooms[0].length &&
        rooms[row][col] === EMPTY
      ) {
        // valid
        rooms[row][col] = count + 1;
        gates.push([row, col]);
      }
    }
  }
};
const rooms = [[0, -1, -1]];

console.log(wallsAndGates(rooms));
