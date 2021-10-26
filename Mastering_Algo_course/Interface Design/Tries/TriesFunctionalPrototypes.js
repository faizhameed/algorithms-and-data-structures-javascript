/* Functional Method to solve Trie */

var Trie = function () {
  this.root = TrieNode();
};

function TrieNode() {
  return { end: false, keys: {} };
}
Trie.prototype.insert = function (word, node = this.root) {
  if (word.length === 0) {
    node.end = true;
    return true;
  }
  if (!node.keys[word[0]]) {
    node.keys[word[0]] = TrieNode();
  }
  this.insert(word.substring(1), node.keys[word[0]]);
};

Trie.prototype.search = function (word, node = this.root) {
  if (word.length === 0 && node.end == true) {
    return true;
  }
  if (word.length === 0 || !node.keys[word[0]]) {
    return false;
  }
  return this.search(word.substring(1), node.keys[word[0]]);
};

Trie.prototype.startsWith = function (prefix, node = this.root) {
  if (prefix.length === 0) {
    return true;
  }
  if (!node.keys[prefix[0]]) {
    return false;
  }
  return this.startsWith(prefix.substring(1), node.keys[prefix[0]]);
};

const Word = new Trie();
console.log(
  Word.insert("apple"),
  Word.search("dog"),
  Word.insert("dog"),
  JSON.stringify(Word)
);
