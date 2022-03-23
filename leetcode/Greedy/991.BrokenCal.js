function brokenCal(startValue, target) {
  let op = 0;
  while (startValue < target) {
    op++;
    if (target % 2 === 1) {
      target++;
    } else {
      target /= 2;
    }
  }

  return op + startValue - target;
}

console.log(brokenCal(2, 3));
