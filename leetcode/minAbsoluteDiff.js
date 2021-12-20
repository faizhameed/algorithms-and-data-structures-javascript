//1200. Minimum Absolute Difference

var minimumAbsDifference = function (arr) {
  //
  arr.sort((a, b) => a - b);
  const res = [];
  let min = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    min = Math.min(min, arr[i + 1] - arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (min === arr[i + 1] - arr[i]) {
      res.push([arr[i], arr[i + 1]]);
    }
  }
  return res;
};

const arr = [4, 2, 1, 3];

console.log(minimumAbsDifference(arr));
