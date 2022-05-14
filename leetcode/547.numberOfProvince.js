//leetcode.com/problems/number-of-provinces/
//code_l:js
const findCircleNum = (isConnected) => {
  const size = isConnected.length;
  const adjList = new Array(size).fill(0).map(() => []);
  let provinceCount = 0;
  let isVisited = new Array(size).fill(false);
  // make a adjacent list visits from each node.
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i !== j && isConnected[i][j]) {
        adjList[i].push(j);
      }
    }
  }
  const queue = []; // initialising a queue that takes all the cities in a province
  for (let a = 0; a < adjList.length; a++) {
    if (!isVisited[a]) {
      // if not visited then this is a new provinces so count ++
      provinceCount++;
    } else {
      continue;
    }
    queue.push(adjList[a]); // push the adjacent list at the current province
    while (queue.length > 0) {
      // we will visit all the places that is directly and indirectly connected with a by utilising the queue
      const curr = queue.shift();
      for (let i = 0; i < curr.length; i++) {
        // here we visit all the place directly connected with city a
        if (isVisited[curr[i]]) {
          // we have alread visited here either its in the queue or its direct connections are already iterated
          continue;
        } else {
          queue.push(adjList[curr[i]]);
          isVisited[curr[i]] = true; // store all the places that we visited
        }
      }
    }
  }
  return provinceCount;
};

const isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

console.log(findCircleNum(isConnected));

// 2nd Approach with disjoint set

class UnionFind {
  constructor(size) {
    this.root = new Array(size);
    this.rank = new Array(size).fill(1);

    for (let i = 0; i < size; i++) {
      this.root[i] = i;
    }
    this.count = size;
  }

  find(x) {
    if (x === this.root[x]) {
      return x;
    }

    return (this.root[x] = this.find(this.root[x]));
  }

  union(x, y) {
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
      this.count--;
    }
  }

  getCount() {
    return this.count;
  }
}

function findCircleNum2(isConnected) {
  if (isConnected === null || isConnected.length === 0) {
    return 0;
  }
  const size = isConnected.length;
  const uf = new UnionFind(size);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (isConnected[i][j]) {
        uf.union(i, j);
      }
    }
  }
  return uf.getCount();
}

console.log(findCircleNum2(isConnected));
