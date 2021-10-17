function isValid(str) {
  if (str.length % 2 !== 0) {
    return false;
  }
  if (str === "") {
    return true;
  }
  const strArr = str.split("");
  let i = 0;
  let j = 1;
  while (j < strArr.length) {
    if (strArr[i] !== strArr[j]) {
      i++;
      j++;
    } else {
      strArr.splice(j, 1);
      strArr.splice(i, 1);
      i = 0;
      j = 1;
    }
  }
  console.log(strArr, i, j);
  return strArr.length === 0 ? true : false;
}

console.log(isValid("fie33efi")); // this should not be valid either
