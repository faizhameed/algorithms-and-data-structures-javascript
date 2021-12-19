/* In one operation, you can choose an index i and change arr[i] into any positive integer.

Return the minimum number of operations required to make the array K-increasing for the given k.
 */

var kIncreasing = function (arr, k) {
  let res = 0,
    n = arr.length;
  for (let i = 0; i < k; i++) {
    const newArr = [];
    for (let j = i; j < n; j += k) {
      newArr.push(arr[j]);
    }
    res += newArr.length - longestNonDecreasingSub(newArr);
  }
  return res;
};

function longestNonDecreasingSub(arr) {
  const sub = [];

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    if (sub[sub.length - 1] <= curr) {
      sub.push(curr);
    } else {
      let j = 0;
      while (curr >= sub[j]) {
        j++;
      }
      sub[j] = curr;
    }
  }
  return sub.length;
}

const arr = [2, 2, 2, 2, 2, 1, 1, 4, 4, 3, 3, 3, 3, 3],
  k = 1;

console.log(kIncreasing(arr, k));
