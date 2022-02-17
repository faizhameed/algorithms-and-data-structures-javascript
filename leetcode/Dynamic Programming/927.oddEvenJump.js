var oddEvenJumps = function (A) {
  const n = A.length;

  const sorted = (arr, cb) =>
    arr
      .slice()
      .map((val, i) => [val, i])
      .sort(cb)
      .map(([, i]) => i);

  const makeOddOrEvenNext = (arr) => {
    let result = Array(n).fill(null);
    const stack = [];

    for (let i of arr) {
      while (stack.length && i > stack[stack.length - 1]) {
        result[stack.pop()] = i;
      }
      stack.push(i);
    }
    return result;
  };

  // For [2,3,1,1,4] after sorting asc, the item positions will be
  // 1st item 2, after sort will be positioned at 2nd index [1,1,2,3,4]
  // 2nd item 3, after sort will be positioned at 3rd index
  // 3rd item 1, after sort will be positioned at 0th index
  // ...so on
  // last item 4, after sort will be positioned at 4th index
  // returns [2, 3, 0, 1, 4]
  const smallestItemPosition = sorted(A, ([a], [b]) => a - b);
  //For [2,3,1,1,4], returns [1, 4, 3, 4, null]
  /*
      In a similar manner, we can deduce that:
      From starting index i = 1, we jump to i = 4, so we reach the end.
      From starting index i = 2, we jump to i = 3, and then we can't jump anymore.
      From starting index i = 3, we jump to i = 4, so we reach the end.
      From starting index i = 4, we are already at the end.
    */
  const oddNext = makeOddOrEvenNext(smallestItemPosition);

  // For [2,3,1,1,4] after sorting desc, the item positions will be
  // logic is same as smallest except sorted reverse
  // returns [4, 1, 0, 2, 3]

  const largestItemPosition = sorted(A, ([a], [b]) => b - a);
  const evenNext = makeOddOrEvenNext(largestItemPosition);

  let odd = Array(n).fill(null);
  let even = Array(n).fill(null);
  odd[n - 1] = even[n - 1] = 1;

  // At this point we know the odd and even jumps
  // Use this info to build all reachable state
  for (let i = n - 2; i >= 0; i--) {
    if (oddNext[i] !== null) {
      odd[i] = even[oddNext[i]];
    }

    if (evenNext[i] !== null) {
      even[i] = odd[evenNext[i]];
    }
  }

  return odd.filter((i) => i !== null).length;
};

const arr = [10, 13, 12, 14, 15];

console.log(oddEvenJumps(arr));
