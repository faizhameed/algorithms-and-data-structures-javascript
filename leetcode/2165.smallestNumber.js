var smallestNumber = function (num) {
  // rearragen num to be smallest

  map = {};
  const isNegative = num < 0;
  num = String(Math.abs(num));
  let res = "";
  for (const d of num) {
    if (map[d] === undefined) {
      map[d] = 1;
    } else {
      map[d] += 1;
    }
  }
  console.log(map);

  if (!isNegative) {
    for (let i = 1; i <= 9; i++) {
      while (map[i] !== undefined && map[i] > 0) {
        while (res !== "" && map[0] !== undefined && map[0] > 0) {
          //place all zeros
          res += 0;
          map[0] -= 1;
        }
        res += i;
        map[i] -= 1;
      }
    }
    while (map[0] !== undefined && map[0] > 0) {
      res += 0;
      map[0] -= 1;
    }
  } else {
    for (let i = 9; i >= 0; i--) {
      while (map[i] !== undefined && map[i] > 0) {
        res += i;
        map[i] -= 1;
      }
    }
  }
  return isNegative ? -Number(res) : Number(res);
};

const num = -100000000000000;

console.log(smallestNumber(num));
