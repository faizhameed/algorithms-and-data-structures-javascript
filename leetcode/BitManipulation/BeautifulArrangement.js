var countArrangement = function (n) {
  const permuteArr = permute(n);
  return permuteArr.length;
};

function permute(n, res = [], curr = []) {
  if (curr.length === n) {
    res.push(curr);
    return;
  }
  const map = {};
  curr.forEach((v) => {
    map[v] = true;
  });
  for (let i = 0; i < n; i++) {
    const len = curr.length + 1;
    if (len % (i + 1) !== 0 && (i + 1) % len !== 0) {
      continue;
    }
    if (!map[i + 1]) {
      permute(n, res, [...curr, i + 1], i + 1);
    }
  }
  return res;
}

function isBeautiful(arr) {
  for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % arr[i] !== 0 && arr[i] % (i + 1) !== 0) return false;
  }
  return true;
}

console.log(countArrangement(11));

// console.log(isBeautiful([3, 2, 1]));
