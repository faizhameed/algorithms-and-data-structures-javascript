function substrings(str1) {
  var array1 = [];
  //adding every single element int array1
  for (var x = 0, y = 1; x < str1.length; x++, y++) {
    array1[x] = str1.substring(x, y);
  }

  var combi = [];
  var temp = "";
  var slent = Math.pow(2, array1.length); // there will be a total of 2^n -1 elements

  for (var i = 0; i < slent; i++) {
    temp = "";
    for (var j = 0; j < array1.length; j++) {
      const bitwiseAnd = i & Math.pow(2, j);
      if (bitwiseAnd) {
        temp += array1[j];
      }
    }
    if (temp !== "") {
      combi.push(temp);
    }
  }
  return combi;
}

console.log(substrings("faiz"));
