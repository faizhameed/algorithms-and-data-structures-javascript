var addSpaces = function (s, spaces) {
  const stack = [];
  const n = s.length + spaces.length; // gives total length of the string
  // spaces after updating first space
  let count = 0,
    j = 0,
    k = 0;
  for (let i = 0; i < n; i++) {
    if (spaces[j] + count === i) {
      stack.push(" ");
      count++;
      j++;
    } else {
      stack.push(s[k]);
      k++;
    }
  }

  return stack.join("");
};

const s = "LeetcodeHelpsMeLearn",
  spaces = [1, 13, 15];

console.log(addSpaces(s, spaces));
