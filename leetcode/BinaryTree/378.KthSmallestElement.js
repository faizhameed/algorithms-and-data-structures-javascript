var kthSmallest = function (matrix, k) {
  const n = matrix.length;
  let lo = matrix[0][0],
    hi = matrix[n - 1][n - 1] + 1;
  while (lo < hi) {
    const mid = Math.floor(lo + (hi - lo) / 2);
    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] <= mid) count++;
        else break;
      }
    }
    if (count < k) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
};

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [10, 11, 12, 13],
  [14, 15, 16, 17],
];

console.log(kthSmallest(matrix, 3));
