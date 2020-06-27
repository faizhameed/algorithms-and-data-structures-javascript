function arrayDuplicate(arr) {
  let newArr = [...arr];
  let map = {};
  arr.forEach((elem, i) => {
    if (arr.slice(i + 1).includes(elem) && !map[elem]) {
      newArr.splice(newArr.indexOf(elem), 1);
      map[elem] = true;
    }
  });
  return newArr;
}
console.log(arrayDuplicate([1, 2, 1, 3, 4, 5, 2, 3, 1]));

//expected output =[1,3,4,5,2,3,1]
