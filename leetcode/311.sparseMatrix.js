var multiply = function (mat1, mat2) {
  const m1 = mat1.length;
  const m2 = mat2.length;
  const n2 = mat2[0].length;
  const res = Array(m1)
    .fill(0)
    .map(() => []);
  let i = 0;
  while (i < m1) {
    for (let j = 0; j < n2; j++) {
      let sum = 0;
      for (let k = 0; k < m2; k++) {
        sum += mat1[i][k] * mat2[k][j];
      }
      res[i].push(sum);
    }
    i++;
  }

  return res;
};
