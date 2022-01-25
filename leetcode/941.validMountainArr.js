var validMountainArray = function (arr) {
  if (arr.length <= 2) return false;
  let prev = arr[0];
  let i = 1,
    curr;
  while (i < arr.length) {
    curr = arr[i];
    let currDiff = curr - prev;
    if (currDiff === 0 || (currDiff < 0 && i === 1)) {
      return false;
    } else if (currDiff < 0) {
      break;
    }

    prev = curr;
    i++;
  }

  if (i === arr.length) return false;

  while (i < arr.length) {
    curr = arr[i];
    const currDiff = curr - prev;
    if (currDiff === 0) {
      return false;
    } else if (currDiff > 0) {
      return false;
    }
    prev = curr;
    i++;
  }
  return true;
};

console.log(validMountainArray([1, 3, 2, 1]));
