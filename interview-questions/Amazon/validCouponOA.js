// valid discount coupons

function isValid(str) {
  if (str === "") return true;
  if (str.length % 2 !== 0) return false;
  const stack = [];
  for (const l of str) {
    if (stack.length && l === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(l);
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

function discountCoupon(discounts) {
  const res = [];
  for (const d of discounts) {
    if (isValid(d)) {
      res.push(1);
    } else {
      res.push(0);
    }
  }
  return res;
}

const discounts = [
  "abba",
  "abca",
  "abbacbbc",
  "aabb",
  "xaaxybbyzccz",
  "vaas",
  "jay",
  "abbaccddbbaa",
];

console.log(discountCoupon(discounts));
