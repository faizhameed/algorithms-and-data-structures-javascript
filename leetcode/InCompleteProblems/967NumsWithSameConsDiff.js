var numsSameConsecDiff = function (n, k) {
  //numbers with consecutive differences
  const res = [];
  for (let i = 1; i <= 9; i++) {
    let first = i,
      second = i + k === 10 ? 0 : i + k;
    for (let k = 0; k < 2; k++) {
      if (second < 10 && second !== 0) {
        // console.log(first, second);
        let num = 0,
          flag = 1;
        for (let j = 0; j < n; j++) {
          if (flag) {
            num += first * Math.pow(10, j);
            flag = 0;
          } else {
            num += second * Math.pow(10, j);
            flag = 1;
          }
        }
        res.push(num);
      }
      [first, second] = [second, first];
    }
  }
  return res;
};

console.log(numsSameConsecDiff(3, 1));
