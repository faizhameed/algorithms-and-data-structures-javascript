/* Brute force */

var countBits = function (n) {
  let ans = [];

  for (let i = 0; i <= n; i++) {
    ans.push(i.toString(2).split(""));
  }
  ans = ans.map((v) => v.reduce((a, v) => (v === "1" ? a + 1 : a), 0));
  return ans;
};

/* Optimized */

var countBits = function (n) {
  let ans = new Array(n + 1).fill(0);
  let x = 0,
    b = 1;

  while (b <= n) {
    while (x < b && x + b <= n) {
      ans[x + b] = ans[x] + 1;
      x++;
    }
    x = 0;
    b <<= 1;
  }
  return ans;
};
