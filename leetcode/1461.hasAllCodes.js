var hasAllCodes = function (s, k) {
  let need = 1 << k;
  const got = new Set();
  for (let i = k; i <= s.length; i++) {
    const a = s.substring(i - k, i);
    if (!got.has(a)) {
      need--;
      got.add(a);
      if (need === 0) {
        return true;
      }
    }
  }
  console.log(need);
  if (need === 0) return true;
  return false;
};
