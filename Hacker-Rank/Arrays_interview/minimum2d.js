function minimumSwaps(arr) {
  let swap_count = 0,
    tempArr = [];
  for (let j = 0; j <= arr.length; j++) {
    tempArr.push(0);
  }

  for (let pos = 0; pos < arr.length; pos++) {
    tempArr[arr[pos]] = pos;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > i + 1) {
      let a = tempArr[i + 1];
      arr[a] = arr[i];

      arr[i] = i + 1;
      swap_count++;
      // update the positions of new array
      tempArr[i + 1] = i;
      tempArr[arr[a]] = a;
    }
  }
  return swap_count;
}
