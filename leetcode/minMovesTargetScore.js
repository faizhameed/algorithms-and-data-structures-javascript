var minMoves = function (target, maxDoubles) {
  let val = target,
    count = 0;
  while (val !== 1) {
    if (maxDoubles > 0 && val > 1) {
      if (val % 2 === 1) {
        val--;
        count++;
      }
      maxDoubles--;
      val /= 2;
      count++;
    } else if (val >= 2) {
      count += val - 1;
      break;
    }
  }
  return count;
};
