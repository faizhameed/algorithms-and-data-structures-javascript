var maxConsecutive = function (bottom, top, special) {
  special.sort((a, b) => a - b);
  let max = 0,
    i = bottom,
    j = 0;
  while (i <= top) {
    max = Math.max(max, special[j] - i);
    i = special[j] + 1;
    j++;
    if (j === special.length) break;
  }
  if (i <= top) {
    max = Math.max(max, top + 1 - i);
  }

  return max;
};
