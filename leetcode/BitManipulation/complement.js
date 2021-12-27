var findComplement = function (num) {
  let a = 2;
  while (num >= a) {
    a = a * 2;
  }
  return a - num - 1;
};

function findComplementII(num) {
  let mask = 1;
  while (mask < num) mask = (mask << 1) | 1;
  return num ^ mask;
}
