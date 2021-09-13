var maxNumberOfBalloons = function (text) {
  const maxWords = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0,
  };
  for (let i = 0; i < text.length; i++) {
    if (maxWords[text[i]] !== undefined) {
      maxWords[text[i]] += 1;
    }
  }
  maxWords.l = Math.floor(maxWords.l / 2);
  maxWords.o = Math.floor(maxWords.o / 2);
  return Object.values(maxWords).reduce((a, v) => (a > v ? v : a), Infinity);
};

console.log(maxNumberOfBalloons("balon"));
