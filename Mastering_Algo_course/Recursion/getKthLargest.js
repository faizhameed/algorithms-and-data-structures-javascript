const getKthLargest = (arr, k) => {
  const indexToFind = arr.length - k;
  quickSort(arr, 0, arr.length - 1);
  return arr[indexToFind];
};
