function permutations(str, prefix) {
  if (str.length == 0) {
    console.log(prefix);
    debugger
  } else {
    for (let i = 0; i < str.length; i++) {
      let rem = str.substring(0, i) + str.substring(i + 1);
      debugger
      permutations(rem, prefix + str.charAt(i));
    }
  }
}
function permutation(str) {
  permutations(str, "");
}

permutation("faiz");
