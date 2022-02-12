var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) {
    return 0;
  }
  let count = 1,
    tempStack = [];
  const wordSet = new Set(wordList);
  const stackMain = [beginWord],
    seen = {};
  while (stackMain.length) {
    const curr = stackMain.pop();
    seen[curr] = true;
    // generate the next values and add those to the tempStack

    if (curr === endWord) {
      return count;
    }
    for (let i = 0; i < curr.length; i++) {
      for (let j = 0; j < 26; j++) {
        const next =
          curr.slice(0, i) + String.fromCharCode(j + 97) + curr.slice(i + 1);
        if (wordSet.has(next)) {
          tempStack.push(next);
          wordSet.delete(next);
        }
      }
    }
    if (stackMain.length === 0) {
      stackMain.push(...tempStack);
      count++;
      tempStack = [];
    }
  }
  // shortest transformation sequence from begin to end in wordlist
  return 0;
};

const beginWord = "hit",
  endWord = "cog",
  wordList = ["hot", "dot", "dog", "cot", "lot", "log", "cof", "cog"];

console.log(ladderLength(beginWord, endWord, wordList));
