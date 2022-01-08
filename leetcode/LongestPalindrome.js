var longestPalindrome = function (words) {
  // store the word in a map with its pair
  const map = {};
  let count = 0;

  for (const word of words) {
    if (!map[word]) map[word] = 1;
    else {
      map[word] += 1;
    }
  }
  /* 
  if words.length is odd then we need a word with same letters 
  */
  let flag = false;
  for (const word of words) {
    const reverse = word.split("").reverse().join("");
    if (word === reverse) {
      while (map[word] >= 2) {
        map[word] -= 2;
        count += 4;
      }
      if (map[word] === 1 && !flag) {
        flag = true;
        count += 2;
        map[word] -= 1;
      }
      continue;
    }
    while (map[word] > 0 && map[reverse] > 0) {
      map[word] -= 1;
      map[reverse] -= 1;
      count += 4;
    }
  }

  return count;
};
const words = ["cc", "ll", "xx"];

console.log(longestPalindrome(words));
