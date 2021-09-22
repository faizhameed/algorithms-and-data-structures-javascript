var twoSum = function (numbers, target) {
  const map = {},
    res = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!map[numbers[i]]) {
      map[numbers[i]] = i + 1;
    }
    if (map[target - numbers[i]] && i + 1 !== map[target - numbers[i]]) {
      res.push(...[map[target - numbers[i]], i + 1]);
      break;
    }
  }
  console.log(map);
  return res;
};

console.log(twoSum([0, 0, 1, 2], 0));

/* optimized */

function twoSum(numbers, target) {
  for (let start = 0, end = numbers.length - 1; start < end; ) {
    let sum = numbers[start] + numbers[end];
    if (sum === target) return [++start, ++end];
    else sum > target ? end-- : start++;
  }
}
