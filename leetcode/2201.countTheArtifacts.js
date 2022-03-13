//2201. Count Artifacts That Can Be Extracted

var digArtifacts = function (n, artifacts, dig) {
  const mat = Array(n)
    .fill(0)
    .map(() => Array(n).fill(false));

  for (let i = 0; i < dig.length; i++) {
    const curr = dig[i];
    mat[curr[0]][curr[1]] = true;
  }
  let count = 0;
  for (const art of artifacts) {
    let excavated = true;
    for (let i = art[0]; i <= art[2]; i++) {
      if (!excavated) break;
      for (let j = art[1]; j <= art[3]; j++) {
        if (!mat[i][j]) {
          excavated = false;
          break;
        }
      }
    }
    if (excavated) count++;
  }

  return count;
};
