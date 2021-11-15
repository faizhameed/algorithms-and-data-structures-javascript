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

/* Alternative Method */

/**
 * @param {number} k
 */

class MyCircularQueue {
  constructor(k) {
    this.root = null;
    this.tail = null;
    this.max = k;
    this.length = 0;
  }

  enQueue(val) {
    if (this.length === this.max) {
      return false;
    }
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      this.tail = newNode;
    }
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return true;
  }
  deQueue() {
    if (this.length === 0) {
      return false;
    }
    const remNode = this.root;
    if (this.length === 1) {
      this.root = null;
      this.tail = null;
    } else {
      this.root = this.root.next;
      this.root.prev = null;
      remNode.next = null;
    }
    this.length--;
    return true;
  }

  Front() {
    return this.root ? this.root.val : -1;
  }

  Rear() {
    return this.tail ? this.tail.val : -1;
  }
  isEmpty() {
    return this.length === 0;
  }
  isFull() {
    return this.max === this.length;
  }
}

var obj = new MyCircularQueue(5);
var param_1 = obj.enQueue(3);
var param_2 = obj.deQueue();
var param_3 = obj.Front();
var param_4 = obj.Rear();
var param_5 = obj.isEmpty();
var param_6 = obj.isFull();
