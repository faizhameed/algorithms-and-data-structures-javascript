let arr = [34, 54, 56, 12, 3, 4];

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = arr.length / 2;
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // we will split the array in the middle recursively. and then sort

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let rightIndex = 0,
    leftIndex = 0;
  let tempArr = [];
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      tempArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      tempArr.push(right[rightIndex]);
      rightIndex++;
    }
  }

  if (leftIndex == left.length) {
    tempArr.push(...right.slice(rightIndex));
    return tempArr;
  }

  tempArr.push(...left.slice(leftIndex));
  return tempArr;
};

console.log(mergeSort(arr));

