function fruitsIntoBasket(fruits) {
  const n = fruits.length;
  if (n <= 2) return n;
  let i = 0,
    j = 1,
    curCount = 1,
    max = 1;

  const type = [fruits[0]];
  while (j < n) {
    if (type.includes(fruits[j])) {
      curCount++;
      j++;
    } else {
      if (type.length === 1) {
        type.push(fruits[j]);
        j++;
        curCount++;
      } else {
        max = Math.max(curCount, max);
        curCount = 0;

        i = j - 1;
        if (fruits[i] === type[0]) {
          type[1] = fruits[j];
        } else {
          type[0] = fruits[j];
        }
        while (type.includes(fruits[i])) {
          i--;
          curCount++;
        }
      }
    }
  }
  return Math.max(curCount, max);
}

function fruitsIntoBasketBetter(fruits) {
  const n = fruits.length;
  if (n <= 2) return n;
  let i = 0,
    j = 1,
    curCount = 1,
    max = 1;
  const lastSeen = [0, null];
  const type = [fruits[0]];
  while (j < n) {
    if (type.includes(fruits[j])) {
      if (type[0] === fruits[j]) {
        lastSeen[0] = j;
      } else {
        lastSeen[1] = j;
      }
      curCount++;
      j++;
    } else {
      if (type.length === 1) {
        type.push(fruits[j]);
        lastSeen[1] = j;
        j++;
        curCount++;
      } else {
        max = Math.max(curCount, max);
        curCount = 0;

        if (fruits[j - 1] === type[0]) {
          i = lastSeen[1] + 1;
          type[1] = fruits[j];
        } else {
          i = lastSeen[0] + 1;
          type[0] = fruits[j];
        }
        curCount = j - i;
      }
    }
  }
  return Math.max(curCount, max);
}
//[3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]
const fruits = [0, 1, 6, 6, 4, 4, 6];

console.log(fruitsIntoBasketBetter(fruits));
