/* https://leetcode.com/problems/01-matrix/ 
[[1,0,1,1,0,0,1,0,0,1],[0,1,1,0,1,0,1,0,1,1],[0,0,1,0,1,0,0,1,0,0],[1,0,1,0,1,1,1,1,1,1],[0,1,0,1,1,0,0,0,0,1],[0,0,1,0,1,1,1,0,1,0],[0,1,0,1,0,1,0,0,1,1],[1,0,0,0,1,1,1,1,0,1],[1,1,1,1,1,1,1,0,1,0],[1,1,1,1,0,1,0,0,1,1]]

*/

var updateMatrix = function (mat) {
  const res = new Array(mat.length)
    .fill(0)
    .map(() => new Array(mat[0].length).fill(0));

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] !== 0) {
        bfs(i, j, mat, res);
      }
    }
  }

  return res;
};

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const bfs = (i, j, mat, res) => {
  const queue = [];
  const seen = new Array(mat.length)
    .fill(0)
    .map(() => new Array(mat[0].length).fill(false));
  queue.push([i, j]);
  seen[i][j] = true;
  let maxDistance = undefined; // since mat[i][j]!==0
  while (queue.length) {
    let found = false;
    const curr = queue.shift();
    let count = 1 + Math.max(Math.abs(curr[0] - i) + Math.abs(curr[1] - j));
    for (let i = 0; i < directions.length; i++) {
      const pos = directions[i];
      const row = curr[0] + pos[0];
      const col = curr[1] + pos[1];
      if (
        row >= 0 &&
        row < mat.length &&
        col >= 0 &&
        col < mat[0].length &&
        !seen[row][col]
      ) {
        if (mat[row][col] === 0) {
          found = true;
          break;
        } else {
          if (!seen[row][col]) {
            queue.push([row, col]);
            seen[row][col] = true;
          }
        }
      }
    }
    if (found === true) {
      maxDistance = maxDistance ? Math.min(count, maxDistance) : count;
      break;
    }
  }
  res[i][j] = maxDistance;
};

const mat = [
  [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
  [0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
  [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
  [0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [1, 1, 1, 1, 0, 1, 0, 0, 1, 1],
];

console.log(updateMatrixOptimized(mat));

// instead of working from 1 lets work out from all the zeros,all the adjacent of zeros get 1,

function updateMatrixOptimized(mat) {
  const rows = mat.length;
  if (rows === 0) return mat;
  const cols = mat[0].length;
  const dist = new Array(mat.length)
    .fill(0)
    .map(() => new Array(mat[0].length).fill(Infinity));

  //First pass: check for left and top
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 0) {
        dist[i][j] = 0;
      } else {
        if (i > 0) dist[i][j] = Math.min(dist[i][j], dist[i - 1][j] + 1);
        if (j > 0) dist[i][j] = Math.min(dist[i][j], dist[i][j - 1] + 1);
      }
    }
  }

  //Second pass: check for bottom and right
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 0; j--) {
      if (i < rows - 1) dist[i][j] = Math.min(dist[i][j], dist[i + 1][j] + 1);
      if (j < cols - 1) dist[i][j] = Math.min(dist[i][j], dist[i][j + 1] + 1);
    }
  }
  return dist;
}
