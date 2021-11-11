/* 
Design Add and Search Words Data Structure

Supports adding new words and finding if a string matches any previously added string.

Implement word dictionary class:

WordDictionary() initializes the obejct.

*/

var WordDictionary = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  const wordArr = word.split("").reverse();
  let currTrie = this.root;
  while (wordArr.length) {
    const curr = wordArr.pop();
    if (!currTrie[curr]) {
      currTrie[curr] = {};
    }
    currTrie = currTrie[curr]; /// move on
    if (wordArr.length === 0) {
      currTrie.end = true;
    }
  }
};
/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  let curr = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!curr[word[i]]) {
      return false;
    }
    curr = curr[word[i]];
  }
  if (curr.end) {
    return true;
  }
  return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
WordDictionary.prototype.print = function () {
  console.log(JSON.stringify(this.root));
};

var obj = new WordDictionary();
obj.addWord("hello");
obj.addWord("bad");

obj.print();

console.log(obj.search("bad"));
