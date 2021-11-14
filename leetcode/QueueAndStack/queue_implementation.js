/* Queue implementation
since removing from queue is less efficient in array datastructure, its better to implement a linkedlist or doubly linkedlist
Queue requirements
enqueue
dequeue
peek

*/

function Node(val = 0) {
  return {
    val,
    next: null,
    prev: null,
  };
}

class Queue {
  constructor(val) {
    this.root = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      this.tail = newNode;
    }
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  dequeue() {
    if (!this.root) {
      return null;
    }
    const remNode = this.root;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.root = this.root.next;
      this.root.prev = null;
      remNode.next = null;
    }
    this.length--;
    return remNode;
  }

  peek() {
    return this.root.val;
  }
}

const q = new Queue();
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);

console.log(q.peek());
