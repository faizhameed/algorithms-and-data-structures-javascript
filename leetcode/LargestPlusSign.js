var orderOfLargestPlusSign = function (n, mines) {
  let mineSet = new Set();
  // convert mines array to set so that we can easily check later
  // if the current index is a mine or not
  for (let mine of mines) {
    mineSet.add(`${mine[0]}_${mine[1]}`);
  }
  // create nxn 2d arrays for all four directions and assign all elements
  // to zero. This denotes arm of the plus sign in that direction. Later
  // for elmeent (i, j), we take the minimum of left[i][j], right[i][j],
  // up[i][j] and down[i][j]
  let left = create2dArray(n),
    down = create2dArray(n),
    up = create2dArray(n),
    right = create2dArray(n);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // if it is a mine, it is already 0, let it be
      if (mineSet.has(`${i}_${j}`)) {
        continue;
      }
      let leftValue = j === 0 ? 0 : left[i][j - 1];
      let upValue = i === 0 ? 0 : up[i - 1][j];
      left[i][j] = leftValue + 1;
      up[i][j] = upValue + 1;
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (mineSet.has(`${i}_${j}`)) {
        continue;
      }
      let rightValue = j === n - 1 ? 0 : right[i][j + 1];
      let downValue = i === n - 1 ? 0 : down[i + 1][j];
      right[i][j] = rightValue + 1;
      down[i][j] = downValue + 1;
    }
  }

  let answer = -Infinity;
  // final iteration
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // these two lines are the crux of this algorithms
      let min = Math.min(left[i][j], up[i][j], right[i][j], down[i][j]);
      answer = Math.max(answer, min);
    }
  }
  return answer;
};

function create2dArray(n) {
  let array = new Array(n);
  for (let i = 0; i < array.length; i++) {
    array[i] = new Array(n).fill(0);
  }
  return array;
}
