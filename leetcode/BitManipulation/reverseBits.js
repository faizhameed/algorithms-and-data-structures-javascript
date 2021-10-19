/* Brute force solution */

var reverseBits = function (n) {
  let res = 0,
    power = 31;
  while (n !== 0) {
    res += (n & 1) << power;
    n = n >> 1;
    power--;
  }
  return res;
};

/* optimize */

function reverseBitsOpt(n) {
  let result = 0;
  let count = 32;

  while (count--) {
    result *= 2;
    result += n & 1;
    n = n >> 1;
  }
  return result.toString(2);
}

console.log(reverseBitsOpt(00000010100101000001111010011100));
