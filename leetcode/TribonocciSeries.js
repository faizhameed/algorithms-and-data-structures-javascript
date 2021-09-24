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
