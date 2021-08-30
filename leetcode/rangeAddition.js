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
  console.log(matrix, maxVal);
  return count;
};

const optimized = (m, n, ops) => {
  if (ops.length === 0) {
    return m * n;
  }
  let leastRow = ops[0][0],
    leastCol = ops[0][1];
  for (let i = 1; i < ops.length; i++) {
    const col = ops[i][1];
    const row = ops[i][0];
    leastCol = Math.min(col, leastCol);
    leastRow = Math.min(row, leastRow);
  }
  return Math.min(m, leastRow) * Math.min(leastCol, n);
};

/* 
const minHeight = ops.reduce((acc, cur) => Math.min(acc, cur[0]), m);
  const minWidth = ops.reduce((acc, cur) => Math.min(acc, cur[1]), n);
  return minHeight * minWidth;
*/
const testCase = [
  26,
  17,
  [
    [20, 10],
    [26, 11],
    [2, 11],
    [4, 16],
    [2, 3],
    [23, 13],
    [7, 15],
    [11, 11],
    [25, 13],
    [11, 13],
    [13, 11],
    [13, 16],
    [26, 17],
  ],
];
console.log(rangeAdd(...testCase));
console.log(optimized(...testCase));
