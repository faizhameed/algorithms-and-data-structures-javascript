function addBinary(a, b) {
  a = a.split("").reverse();
  b = b.split("").reverse();
  let carry = 0,
    sumArr = [];
  i = 0;
  while (a[i] !== undefined || b[i] !== undefined) {
    if (a[i] === undefined) {
      sumArr.push(SumBinary(Number(b[i]), carry));
    } else if (b[i] === undefined) {
      sumArr.push(SumBinary(Number(a[i]), carry));
    } else {
      sumArr.push(SumBinary(Number(a[i]), Number(b[i]), carry));
    }
    i++;
  }
  if (carry === 1) {
    sumArr.push(1);
  }
  function SumBinary(...args) {
    const sum = args.reduce((a, v) => a + v, 0);

    switch (sum) {
      case 0:
        carry = 0;
        return 0;
      case 1:
        carry = 0;
        return 1;
      case 2:
        carry = 1;
        return 0;
      case 3:
        carry = 1;
        return 1;
      default:
        return sum;
    }
  }

  return sumArr.reverse().join("");
}
let s = "123";
console.log(addBinary("11110", "110"));
