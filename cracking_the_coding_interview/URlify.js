function urlify(str) {
  let emptySpace = 0;
  let trueLength = str.length;
  let strArray = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      emptySpace++;
    }
  }
  let index = str.length + 2 * emptySpace;
  if (trueLength < str.length) {
    str[trueLength] = "$";
  }
  for (let j = trueLength - 1; j >= 0; j--) {
    if (str[j] == " ") {
      strArray[index - 1] = "0";
      strArray[index - 2] = "2";
      strArray[index - 3] = "%";
      index -= 3;
    } else {
      strArray[index - 1] = str[j];
      index--;
    }
  }
  return strArray.join("");
}

console.log(urlify("faiz hameed"));
