var knightDialerBrute = function (n) {
  // matrix of 4x3 where
  if (n === 1) {
    return 10;
  }
  const adjList = [
    [4, 6],
    [6, 8],
    [7, 9],
    [4, 8],
    [0, 3, 9],
    [],
    [0, 1, 7],
    [2, 6],
    [1, 3],
    [2, 4],
  ];
  const q1 = [0, 1, 2, 3, 4, 6, 7, 8, 9];
  let numLen = 0;
  let q2 = [];
  while (q1.length || q2.length) {
    if (q1.length === 0) {
      numLen++;
      q1.push(...q2);
      q2 = [];
      if (numLen === n - 1) {
        return q1.length;
      }
    }
    const curr = q1.shift();
    for (const a of adjList[curr]) {
      q2.push(a);
    }
  }
};

var knightDialer = function (n) {
  // matrix of 4x3 where
  if (n === 1) {
    return 10;
  }
  const m = 10 ** 9 + 7;
  const numMap = {
    1: [6, 8],
    2: [7, 9],
    3: [4, 8],
    4: [0, 3, 9],
    5: [],
    6: [0, 1, 7],
    7: [2, 6],
    8: [1, 3],
    9: [2, 4],
    0: [4, 6],
  };

  let total = 0;

  const dp = new Array(10).fill(null).map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= 9; i++) {
    dp[i][1] = 1;
    dp[i][2] = numMap[i].length;
    if (n === 2) {
      total += dp[i][2];
    }
  }

  for (let i = 3; i <= n; i++) {
    for (let num = 0; num <= 9; num++) {
      numMap[num].forEach(
        (d) => (dp[num][i] = (dp[num][i] + dp[d][i - 1]) % m)
      );

      if (i === n) {
        total = (total + dp[num][i]) % m;
      }
    }
  }

  return total;
};

console.log(knightDialer(3131));
