class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // root of a binary seach tree
    this.root = null;
  }

  // function to be implemented
  insert(value) {
    let node = new Node(value);
    if (this.root == null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(node, newNode) {
    // if the data is less than the node
    // data move left of the tree
    if (newNode.data < node.data) {
      // if left is null insert node here
      if (node.left === null) node.left = newNode;
      // if left is not null recurr until
      // null is found
      else this.insertNode(node.left, newNode);
    }

    // if the data is more than the node
    // data move right of the tree
    else {
      // if right is null insert node here
      if (node.right === null) node.right = newNode;
      // if right is not null recurr until
      // null is found
      else this.insertNode(node.right, newNode);
    }
  }
}

function isBst(node, min = null, max = null) {
  if (node == null) {
    return true;
  }
  if (node.value > max || node.value < min) {
    return false;
  }

  return isBst(node.left, min, node) && isBst(node.right, node, max);
}
