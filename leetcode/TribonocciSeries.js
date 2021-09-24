const map = {};
var tribonacci = function (n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  if (map[n]) {
    return map[n];
  }
  map[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
  return map[n];
};

/* No recursive optimized */

var tribonacci = function (n) {
  let arr = [0, 1, 1];
  if (n < 3) {
    return arr[n];
  }
  for (let i = 3; i <= n; i++) {
    arr.push(arr[i - 3] + arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
};
