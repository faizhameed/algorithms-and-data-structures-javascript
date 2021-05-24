const getKthLargest = (arr, k) => {
  const indexToFind = arr.length - k;
  // quickSort(arr, 0, arr.length - 1);

  return arr[indexToFind];
};

/* with quick Hoare's select algorithm */

const quickSelect = (arr, left, right, indexToFind) => {
  if (left < right) {
    const partitionIndex = partition(arr, left, right);
    if (partitionIndex === indexToFind) {
      return arr[indexToFind];
    }
    if (indexToFind < partitionIndex) {
      return quickSelect(arr, left, partitionIndex - 1, indexToFind);
    }
    if (indexToFind < partitionIndex) {
      return quickSelect(arr, partitionIndex + 1, right, indexToFind);
    }
  }
};
