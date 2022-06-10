var minSwaps = function (data) {
  const len = data.reduce((a, v) => a + v, 0);
  let min = Infinity;

  let i = 0,
    j = 0,
    count = 0;

  while (j < len) {
    if (data[j] === 0) count++;
    j++;
  }
  min = Math.min(count, min);
  while (j < data.length) {
    if (data[i] === 0 && data[j] === 1) {
      count--;
    } else if (data[i] === 1 && data[j] === 0) {
      count++;
    }

    min = Math.min(count, min);
    i++;
    j++;
  }

  return min;
};
