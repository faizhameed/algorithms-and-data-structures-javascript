function stringCompression(str) {
  let newStr = "",
    current = str[0],
    count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] == current) {
      count++;
    } else {
      newStr += current + count;
      current = str[i];
      count = 1;
    }
  }
  newStr += current + count;
  if (newStr.length > str.length) {
    return str;
  }
  return newStr;
}

console.log(stringCompression("aarrrbccaaaaaaaa"));
