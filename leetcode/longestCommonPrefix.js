var longestCommonPrefix = function (strs) {
  let common = strs[0];

  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < common.length; j++) {
      const curr = strs[i][j];
      if (common[j] !== curr) {
        common = strs[i].slice(0, j);
        break;
      }
    }
  }
  return common;
};
