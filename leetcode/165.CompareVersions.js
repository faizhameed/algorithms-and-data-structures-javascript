var compareVersion = function (version1, version2) {
  const v1 = version1.split(".");
  const v2 = version2.split(".");
  const n = Math.max(v1.length, v2.length);
  let i = 0;
  while (i < n) {
    if (v1[i] && v2[i]) {
      if (Number(v1[i]) < Number(v2[i])) {
        return -1;
      } else if (Number(v1[i]) > Number(v2[i])) {
        return 1;
      }
    } else {
      if (v1[i]) {
        if (Number(v1[i]) > 0) return 1;
      } else if (v2[i]) {
        if (Number(v2[i]) > 0) return -1;
      }
    }
    i++;
  }
  return 0;
};
