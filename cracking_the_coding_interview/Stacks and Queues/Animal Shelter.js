function Node(data) {
  (this.data = data), (this.next = null);
}

function AnimalShelter() {
  this.size = 0;
  this.first = this.last = null;
}

AnimalShelter.prototype.enqueue = function (data) {
  const node = new Node(data);
  node.data = data;
  if (!this.first) {
    this.first = this.last = node;
    this.size++;
    return node;
  }
  this.last.next = node;
  this.last = node;
  this.size++;
  return node;
};

AnimalShelter.prototype.dequeue = function () {
  if (!this.first) {
    return;
  }
  const node = this.first;
  this.first = this.first.next;
  if (!this.first) {
    this.last = null;
  }
  this.size = Math.max(0, this.size - 1);
  return node;
};

AnimalShelter.prototype.dequeueDog = function () {
  let prev = (current = this.first);
  let next = current ? current.next : null;
  let dog;
  while (current) {
    if (current.data === "dog") {
      // there is only one data available
      if (this.first === current && next === null) {
        this.first = this.last = null;
      } else if (next === null && prev) {
        this.last = prev;
      }
      dog = current.data;
      prev.next = next;
      this.size--;
      break;
    }
    prev = current;
    current = next;
    next = current ? current.next : null;
  }
  return dog;
};

AnimalShelter.prototype.dequeueCat = function () {
  let prev = (current = this.first);
  let next = current ? current.next : null;
  let cat;
  while (current) {
    if (current.data === "cat") {
      // there is only one data available
      if (this.first === current && next === null) {
        this.first = this.last = null;
      } else if (next === null && prev) {
        this.last = prev;
      }
      cat = current.data;
      prev.next = next;
      this.size--;
      break;
    }
    prev = current;
    current = next;
    next = current ? current.next : null;
  }
  return cat;
};

AnimalShelter.prototype.peek = function () {
  if (!this.first) return;
  return this.first;
};

AnimalShelter.prototype.getSize = function () {
  return this.size;
};

AnimalShelter.prototype.isEmpty = function () {
  return this.size === 0 && this.first;
};
