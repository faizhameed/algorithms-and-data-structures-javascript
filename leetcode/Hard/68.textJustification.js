var fullJustify = function (words, maxWidth) {
  const n = words.length;
  const res = [];
  let sum = 0,
    curr = [];
  for (let i = 0; i < n; i++) {
    const word = words[i];
    if (i === 0) {
      sum += word.length;
    } else {
      sum += word.length + 1;
    }
    if (sum <= maxWidth) {
      curr.push(word);
    } else {
      res.push(curr);
      sum = word.length;
      curr = [word];
    }
  }
  res.push(curr);

  for (let i = 0; i < res.length; i++) {
    const sent = res[i],
      sl = sent.length,
      space = maxWidth - sent.reduce((a, word) => a + word.length, 0);
    let str = "",
      spaceAfterEach = Math.floor(space / (sl - 1)),
      extra = space % (sl - 1) || 0;

    if (i === res.length - 1 || res[i].length === 1) {
      for (let j = 0; j < sl; j++) {
        const word = sent[j];
        if (j === sl - 1) {
          str += word + " ".repeat(space - sl + 1);
          break;
        }
        str += word + " ";
      }
    } else {
      for (let j = 0; j < sl; j++) {
        const word = sent[j];
        if (j === sl - 1) {
          str += word;
          break;
        }
        if (extra > 0) {
          str += word + " ".repeat(spaceAfterEach + 1);
          extra--;
        } else {
          str += word + " ".repeat(spaceAfterEach);
        }
      }
    }

    res[i] = str;
  }

  return res;
};

const words = ["What", "must", "be", "acknowledgment", "shall", "be"],
  maxWidth = 16;
console.log(fullJustify(words, maxWidth));
