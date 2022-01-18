var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) {
    return true;
  }
  flowerbed.unshift(0);
  flowerbed.push(0);
  for (let i = 1; i < flowerbed.length - 1; i++) {
    const curr = flowerbed[i];
    if (n === 0) {
      return true;
    }
    if (curr === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1;
      n--;
    }
  }
  if (n > 0) {
    return false;
  }
  return true;
};

const flowerbed = [0],
  n = 1;
console.log(canPlaceFlowers(flowerbed, n));
