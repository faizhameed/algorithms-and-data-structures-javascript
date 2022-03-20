var minDominoRotations = function (tops, bottoms) {
  const n = tops.length;
  function check(x) {
    let rotA = 0,
      rotB = 0;
    for (let i = 0; i < n; i++) {
      if (tops[i] !== x && bottoms[i] !== x) return -1;

      if (tops[i] !== x) {
        rotA += 1;
      } else if (bottoms[i] !== x) {
        rotB += 1;
      }
    }
    return Math.min(rotA, rotB);
  }

  let rotations = check(tops[0]);
  if (rotations !== -1 || tops[0] === bottoms[0]) {
    return rotations;
  }
  return check(bottoms[0]);
};
const tops = [2, 1, 2, 4, 2, 2],
  bottoms = [5, 2, 6, 2, 3, 2];

console.log(minDominoRotations(tops, bottoms));
