const rangeAdd = (m, n, ops) => {
  if (ops.length === 0) {
    return m * n;
  }
  const matrix = new Array(m).fill([]).map(() => new Array(n).fill(0));
  let maxVal = 0;
  let count = 0;
  for (let k = 0; k < ops.length; k++) {
    const xCal = ops[k][0];
    const yCal = ops[k][1];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (i < xCal && j < yCal) {
          matrix[i][j]++;
          maxVal = Math.max(matrix[i][j], maxVal);
        }
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (maxVal === matrix[i][j]) {
        count++;
      }
    }
  }
  return count;
};

console.log(rangeAdd(3, 3, [[2, 2]]));
