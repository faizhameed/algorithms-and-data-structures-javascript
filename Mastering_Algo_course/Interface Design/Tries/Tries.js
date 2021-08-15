/* There is some type of assosicated value which helps you uinderstand */
class TrieNode {
  constructor() {
    this.end = false;
    this.keys = {};
  }
}

class Tire {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word, node = this.root) {}
}

insert("apple");
search("dog");
