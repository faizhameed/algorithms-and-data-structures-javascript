var generateMatrix = function (n) {
  const mat = new Array(n).fill(0).map(() => new Array(n));
  let count = 1;

  for (let layer = 0; layer < (n + 1) / 2; layer++) {
    for (let p = layer; p < n - layer; p++) {
      mat[layer][p] = count++;
    }

    for (let p = layer + 1; p < n - layer; p++) {
      mat[p][n - layer - 1] = count++;
    }

    for (let p = n - layer - 2; p >= layer; p--) {
      mat[n - layer - 1][p] = count++;
    }

    for (let p = n - layer - 2; p > layer; p--) {
      mat[p][layer] = count++;
    }
  }
  return mat;
};

console.log(generateMatrix(2));
