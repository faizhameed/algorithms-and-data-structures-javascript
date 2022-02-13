var maxPointsBrute = function (points) {
  const m = points.length,
    n = points[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    dp[0][i] = points[0][i];
  }
  for (let i = 1; i < m; i++) {
    // calculate a new array of max for each 0 to n columns
    for (let j = 0; j < n; j++) {
      let max = -Infinity;
      for (let k = 0; k < n; k++) {
        currVal = dp[i - 1][k] - Math.abs(k - j);
        if (currVal > max) {
          max = currVal;
        }
      }
      dp[i][j] = points[i][j] + max;
    }
  }

  return Math.max(...dp[m - 1]);
};

var maxPoints = function (points) {
  const m = points.length,
    n = points[0].length;
  let curr_row = new Array(n).fill(0);
  let prev_row = new Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    let run_max = 0;
    for (let j = 0; j < n; j++) {
      run_max = Math.max(run_max - 1, prev_row[j]);
      curr_row[j] = run_max;
    }

    for (let j = n - 1; j >= 0; j--) {
      run_max = Math.max(run_max - 1, prev_row[j]);
      curr_row[j] = Math.max(run_max, curr_row[j]) + points[i][j];
    }

    prev_row = curr_row;
  }
  return Math.max(...prev_row);
};

const points = [[1, 2, 3]];

console.log(maxPoints(points));
