function Node(val, right, left) {
  return {
    val,
    right: right ? right : null,
    left: left ? left : null,
  };
}

class BinaryTreeClass {
  constructor() {
    this.root = null;
  }

  insert(val) {
    if (this.root === null) {
      this.root = val;
    }
    let currentNode = this.root;
    let parentNode;

    while (currentNode !== null) {
      parentNode = currentNode;
      if (val === currentNode.val) {
        return;
      }

      if (val > currentNode.val) {
        currentNode = currentNode.right;
        continue;
      }
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      }
    }

    if (val < parentNode.val) {
      parentNode.left = new Node(val);
    } else {
      parentNode.right = new Node(val);
    }
  }

  search(val) {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }
}
