class UnionFind {
  constructor(size) {
    this.root = new Array(size);
    this.rank = new Array(size);
    for (let i = 0; i < size; i++) {
      this.root[i] = i;
      this.rank[i] = 1;
    }
  }
  find(x) {
    while (x !== this.root[x]) {
      x = this.root[x];
    }
    return x;
  }
  union(x, y) {
    /*
     * if two have a different parent node. we attach them to form a new set
     * if two have same parent node, then there is a cycle
     */
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.root[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.root[rootX] = rootY;
      } else {
        this.root[rootY] = rootX;
        this.rank[rootX] += 1;
      }
    }
  }

  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }
}

const uf = new UnionFind(10);

uf.union(1, 2);
uf.union(2, 5);
uf.union(5, 6);
uf.union(6, 7);
uf.union(3, 8);
uf.union(8, 9);

console.log(uf.isConnected(8, 9));
console.log(uf.isConnected(8, 7));
console.log(uf.isConnected(3, 8));
console.log(uf.isConnected(9, 4));

uf.union(9, 4);
console.log(uf.isConnected(9, 4));
console.log(uf.root, uf.rank);
