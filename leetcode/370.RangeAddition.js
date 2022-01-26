var getModifiedArray = function (length, updates) {
  const arr = new Array(length).fill(0);

  for (const u of updates) {
    arr[u[0]] += u[2];
    if (u[1] + 1 < length) arr[u[1] + 1] -= u[2];
  }
  console.log(arr);
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += arr[i];
    arr[i] = sum;
  }

  return arr;
};
const length = 5,
  updates = [
    [1, 3, 2],
    [2, 4, 3],
    [0, 2, -2],
  ];
console.log(getModifiedArray(length, updates));
