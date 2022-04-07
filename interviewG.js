const findSpan = (c) => {
  const left = c[0] - c[1];
  const right = c[0] + c[1];
  return [left, right];
};

function countVisibleM(peaks) {
  const span = [];
  for (const peak of peaks) {
    span.push(findSpan(peak));
  }

  span.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });

  let maxRight = span[0][1],
    count = peaks.length;

  for (let i = 1; i < span.length; i++) {
    const c = span[i];
    if (c[1] < maxRight) {
      count--;
      continue;
    }
    maxRight = c[1];
  }
  return count;
}
