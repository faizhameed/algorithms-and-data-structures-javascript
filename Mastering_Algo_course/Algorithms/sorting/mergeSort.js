const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let leftIndex = 0,
    rightIndex = 0,
    result = [];
  // while (leftIndex < left.length && rightIndex < right.length) {
  //   if (left[leftIndex] < right[rightIndex]) {
  //     result.push(left[leftIndex]);
  //     leftIndex++;
  //   }
  //   if (left[leftIndex] > right[rightIndex]) {
  //     result.push(right[rightIndex]);
  //     rightIndex++;
  //   }
  // }
  // return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }
  return [...result];
}

const answer = mergeSort(numbers);
console.log(answer);
