var restoreString = function (s, indices) {
  const res = new Array(indices.length).fill(0);
  for (let i = 0; i < indices.length; i++) {
    res[indices[i]] = s[i];
  }
  return res.join("");
};
