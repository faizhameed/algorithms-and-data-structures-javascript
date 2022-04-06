var threeSumMulti = function (arr, target) {
  let count = 0;
  const MOD = Math.pow(10, 9) + 7;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    let j = i + 1,
      k = arr.length - 1;
    const T = target - arr[i];
    while (j < k) {
      if (arr[j] + arr[k] > T) {
        k--;
      } else if (arr[j] + arr[k] < T) {
        j++;
      } else if (arr[j] !== arr[k]) {
        let left = 1,
          right = 1;
        while (j + 1 < k && arr[j] === arr[j + 1]) {
          left++;
          j++;
        }
        while (k - 1 > j && arr[k] === arr[k - 1]) {
          right++;
          k--;
        }
        count += left * right;
        count %= MOD;
        j++;
        k--;
      } else {
        count += ((k - j + 1) * (k - j)) / 2;
        count %= MOD;
        break;
      }
    }
  }
  return count;
};
const arr = [2, 2, 2, 2, 4, 4, 4, 5, 5, 5],
  target = 8;
console.log(threeSumMulti(arr, target));
