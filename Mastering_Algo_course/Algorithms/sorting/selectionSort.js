const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  let length = array.length;
  for (let i = 0; i < length; i++) {
    let nextSmall = array[i];
    let index = i;
    for (let j = i; j < length; j++) {
      if (nextSmall > array[j]) {
        nextSmall = array[j];
        index = j;
      }
    }
    let temp = array[i];
    array[i] = nextSmall;
    array[index] = temp;
  }
  return array;
}

console.log(selectionSort(numbers));
