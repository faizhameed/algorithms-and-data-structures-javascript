var kWeakestRows = function (mat, k) {
  const m = mat.length,
    n = mat[0].length;
  const arr = Array(m).fill(0);

  for (let i = 0; i < m; i++) {
    //O(m+n)
    let soldiers = 0;
    for (let j = 0; j < n; j++) {
      if (mat[i][j]) soldiers += 1;
      else break;
    }
    arr[i] = [i, soldiers];
  }

  arr.sort((a, b) => {
    // O(mlogm)
    if (a[1] > b[1]) return 1;
    else if (a[1] < b[1]) return -1;
    else {
      return a[0] - b[0];
    }
  });

  const res = [];

  for (const [index] of arr) {
    //O(k)
    if (k === 0) break;
    k--;
    res.push(index);
  }
  return res;
};

/* Binary Search */

var kWeakestRows = function (mat, k) {
  const m = mat.length,
    n = mat[0].length;
  const arr = Array(m).fill(0);

  function binarySearch(row) {
    let low = 0,
      hi = n;
    while (low < hi) {
      const mid = Math.floor(low + (hi - low) / 2);
      if (mat[row][mid] === 1) {
        low = mid + 1;
      } else {
        hi = mid;
      }
    }
    return low;
  }
  for (let i = 0; i < m; i++) {
    //O(m+n)

    arr[i] = [i, binarySearch(i)];
  }

  arr.sort((a, b) => {
    // O(mlogm)
    if (a[1] > b[1]) return 1;
    else if (a[1] < b[1]) return -1;
    else {
      return a[0] - b[0];
    }
  });

  const res = [];
  console.log(arr);
  for (const [index] of arr) {
    //O(k)
    if (k === 0) break;
    k--;
    res.push(index);
  }
  return res;
};
