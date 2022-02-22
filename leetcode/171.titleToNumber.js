var titleToNumber = function (columnTitle) {
  const arr = columnTitle.split("").reverse();
  let count = arr[0].charCodeAt() - 64;
  for (let i = 1; i < arr.length; i++) {
    count += (arr[i].charCodeAt() - 64) * Math.pow(26, i);
  }
  return count;
};
