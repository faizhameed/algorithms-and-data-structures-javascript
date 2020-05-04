function arrayManipulation(n, queries) {
  // make an array of n
  let baseArray = Array(n).fill(0);
  let k = 0;

  while (k < queries.length) {
    baseArray[queries[k][0] - 1] += queries[k][2];
    if (queries[k][1] < baseArray.length) {
      baseArray[queries[k][1]] -= queries[k][2];
    }

    k++;
  }

  let max = 0;
  for (let j = 1; j < baseArray.length; j++) {
    baseArray[j] += baseArray[j - 1];
  }
  for (let k = 0; k < baseArray.length; k++) {
    max = Math.max(max, baseArray[k]);
  }
  return max;
}
