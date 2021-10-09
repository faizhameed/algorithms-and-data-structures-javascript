let arr = [34, 54, 56, 12, 3, 4];

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = arr.length / 2;
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  debugger;
  // we will split the array in the middle recursively. and then sort

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let rightIndex = 0,
    leftIndex = 0;
  let tempArr = [];
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      tempArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      tempArr.push(right[rightIndex]);
      rightIndex++;
    }
  }

  if (leftIndex == left.length) {
    tempArr.push(...right.slice(rightIndex));
    return tempArr;
  }
  debugger;
  tempArr.push(...left.slice(leftIndex));
  return tempArr;
};
var getDateArray = function (start, end) {
  var arr = new Array(),
    dt = new Date(start);

  while (dt <= end) {
    arr.push(new Date(dt));
    dt.setDate(dt.getDate() + 1);
  }

  return arr;
};

var People = [
  { Name: "Colder", Surname: "paul", date: "June 12 2012 11:00:00 AM" },
  { Name: "yeel", Surname: "ZZZ", date: "August 25 2002 8:00:00 AM" },
  { Name: "Stifen", Surname: "AAA", date: "April 12 2004 9:00:00 AM" },
  { Name: "George", Surname: "xer", date: "Mar 12 2012 1:00:00 AM" },
  { Name: "ice", Surname: "val", date: "Mar 12 2012 10:45:00 AM" },
  { Name: "Rime", Surname: "ccd", date: "Dec 12 2001 7:50:00 AM" },
  { Name: "Arold", Surname: "raul", date: "Mar 12 2012 11:00:00 AM" },
  { Name: "aol", Surname: "cols", date: "Mar 12 2012 6:00:00 AM" },
  { Name: "Pam", Surname: "powl", date: "Mar 12 2012 7:00:00 AM" },
];

People.sort(function (a, b) {
  var c = new Date(a.date);
  var d = new Date(b.date);
  return d - c;
});

console.log(People);

// find largest number using reduce

var maxNumber = a.reduce(function (prev, cur) {
  return prev > cur ? prev : cur;
}, -Infinity);
