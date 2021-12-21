var isPowerOfTwo = function (n) {
  if (n === 1) return true;
  if (n <= 0) return false;
  while (n >= 2 && n % 1 === 0) {
    if (n === 2) {
      return true;
    }
    n /= 2;
  }
  return false;
};

function isPowerTwo(n) {
  return n <= 0 ? false : !(n & (n - 1));
}
