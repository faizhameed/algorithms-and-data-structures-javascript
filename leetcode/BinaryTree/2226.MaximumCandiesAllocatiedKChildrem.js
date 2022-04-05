function maximumCandies(candies, k) {
  let left = 0,
    right = 100000000;
  while (left < right) {
    const mid = Math.floor((left + right + 1) / 2);
    let sum = 0;
    for (const candy of candies) {
      sum += Math.floor(candy / mid);
    }
    if (sum < k) {
      // this doesnt work, all child will not get a candy
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return left;
}
