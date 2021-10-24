/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
  function isValid(word) {
    if (!word) return false;
    const n = word.length;

    const punctuations = ["!", ".", ","];
    let hypCount = 0;

    for (let i = 0; i < n; i++) {
      const curr = word[i];
      if (!isNaN(curr)) {
        return false;
      }
      if (punctuations.includes(curr) && i !== n - 1) {
        return false;
      }
      if (punctuations.includes(word[i + 1]) && curr === "-") {
        return false;
      }
      if (curr === "-" && (i === 0 || i === n - 1)) {
        return false;
      }
      if (curr === "-") {
        if (hypCount === 0) {
          hypCount = 1;
          continue;
        } else {
          return false;
        }
      }
    }
    return true;
  }

  const sentenceArr = sentence.split(" ");
  let count = 0;
  for (let i = 0; i < sentenceArr.length; i++) {
    if (isValid(sentenceArr[i])) {
      count++;
    }
  }
  return count;
};
