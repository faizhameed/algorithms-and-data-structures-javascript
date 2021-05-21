const quickSort = (array, left, right) => {
  if (left < right) {
    const partitionIndex = partition(array, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
};

const partition = (array, left, right) => {
  const pivotElement = array[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (array[j] < pivotElement) {
      swap(array, i, j);
      i++;
    }
  }
  swap(array, i, right);
  return i;
};

const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};
const arr = [4, 2, 34, 6, 71, 3];
quickSort(arr, 0, 5);
console.log(arr);
