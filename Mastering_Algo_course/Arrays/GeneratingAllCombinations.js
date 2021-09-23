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
  combi.unshift("");
  return combi;
}

var maxLength = function (arr) {
  // Initialize results with an empty string
  // from which to build all future results
  let results = [""];
  for (let word of arr) {
    // We only want to iterate through results
    // that existed prior to this loop
    let resultsLen = results.length;
    for (let i = 0; i < resultsLen; i++) {
      // Form a new result combination and
      let newRes = results[i] + word;
      results.push(newRes);
    }
  }
  return results;
};
console.log(maxLength("faiz"));

console.log(substrings("faiz"));
