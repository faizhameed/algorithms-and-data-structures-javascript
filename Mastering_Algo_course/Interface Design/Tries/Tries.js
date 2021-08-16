/* There is some type of assosicated value which helps you uinderstand 
S(N)
T = O(L)
*/
class TrieNode {
  constructor() {
    this.end = false;
    this.keys = {};
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word, node = this.root) {
    if (word.length === 0) {
      node.end = true;
      return true;
    }
    if (!node.keys[word[0]]) {
      node.keys[word[0]] = new TrieNode();
    }
    this.insert(word.substring(1), node.keys[word[0]]);
  }
  search(word, node = this.root) {
    if (word.length === 0 && node.end) {
      return true;
    }
    if (word.length === 0 || !node.keys[word[0]]) {
      return false;
    }
    return this.search(word.substring(1), node.keys[word[0]]);
  }

  startsWith(prefix, node = this.root) {
    if (prefix.length === 0) {
      return true;
    }
    if (!node.keys[prefix[0]]) {
      return false;
    }
    return this.startsWith(prefix.substring(1), node.keys[prefix[0]]);
  }
}

insert("apple");
search("dog");
