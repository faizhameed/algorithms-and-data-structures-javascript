function minEatingSpeed(piles, h) {
  let left = 1,
    right = Math.max(...piles);

  while (left < right) {
    let hoursSpend = 0,
      middle = Math.floor((left + right) / 2);

    for (const pile of piles) {
      hoursSpend += Math.ceil(pile / middle);
    }

    if (hoursSpend <= h) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }
  return left;
}

const piles = [3, 6, 7, 15],
  h = 5;

console.log(minEatingSpeed(piles, h));
