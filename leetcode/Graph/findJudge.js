/* Each person gains 1 "point" for each person they are trusted by, and loses 1 "point" for each person they trust. Then at the end, the town judge, if they exist, must be the person with N - 1 "points".
https://leetcode.com/problems/find-the-town-judge/solution/


*/

var findJudge = function (n, trust) {
  const trustCode = new Array(n + 1).fill(0);
  for (const relation of trust) {
    trustCode[relation[0]]--;
    trustCode[relation[1]]++;
  }

  for (let i = 1; i <= n; i++) {
    if (trustCode[i] === n - 1) {
      return i;
    }
  }
  return -1;
};

const trust = [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [4, 3],
];

console.log(findJudge(4, trust));
