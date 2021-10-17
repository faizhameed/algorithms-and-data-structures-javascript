var hammingWeight = function (n) {
  let sum = 0;
  while (n !== 0) {
    sum += n & 1; // if true then the bit at that point was 1
    n = n >>> 1; // pushing the bits from the left side by adding zeros
  }
};
