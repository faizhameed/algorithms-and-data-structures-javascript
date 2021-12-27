/* 100, that's 4, but 5+1 = 6, not four. That's because we have a carry. The rightmost 1's should carry to the next place, so that's where the next part of the process comes, the &. The AND will only return 1 when both are 1 so, so 001+001 = 001, and we shift it left with << 1, so it becomes 010 or 2, so it's 4(100)+2(010) which equals 6 (110)

So, for this to work we need to add the numbers with xOR ^, and also add the carry that comes from AND & */

var getSum = function (a, b) {
  let carry;
  while ((a & b) !== 0) {
    carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a ^ b;
};

console.log(getSum(2, 3));
