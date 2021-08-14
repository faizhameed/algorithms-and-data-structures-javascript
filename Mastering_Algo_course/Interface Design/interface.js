class Monarchy {
  constructor(king) {
    this.king = new Person(king);
    this._persons = {
      [this.king.name]: this.king,
    };
  }
  birth(childName, parentName) {
    const parent = this._persons[parentName];
    const child = new Person(childName);
    parent.children.push(child);
    this._persons[childName] = child;
  }
  death(name) {
    const person = this._persons[name];
    if (person === undefined) {
      return null;
    }
    person.isAlive = false;
  }
  getOrderOfSuccession() {
    //perform preOrder method of DFS
    const order = [];
    this._dfs(this.king, order);
    return order;
  }
  _dfs(currentPerson, order) {
    if (currentPerson.isAlive) {
      order.push(currentPerson.name);
    }
    for (let i = 0; i < currentPerson.children.length; i++) {
      this._dfs(currentPerson.children[i], order);
    }
  }
}

class Person {
  constructor(name) {
    this.name = name;
    this.isAlive = true;
    this.children = [];
  }
}
