var hammingDistance = function (x, y) {
  let xor = x ^ y,
    count = 0;

  while (xor) {
    count++;
    xor = xor & (xor - 1);
  }
  return count;
};
