var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let total = 0,
    size = 0;

  for (let i = 0; i < boxTypes.length; i++) {
    let curr = boxTypes[i][0];
    const units = boxTypes[i][1];
    if (size + curr <= truckSize) {
      total += curr * units;
      size += curr;
    } else if (size < truckSize) {
      while (size + curr > truckSize) {
        curr--;
      }
      total += curr * units;
      size += curr;
      break;
    }
    if (size === truckSize) {
      break;
    }
  }
  return total;
};
