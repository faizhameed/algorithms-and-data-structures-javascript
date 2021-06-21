/* Graphs convert the adjacency list to Order Array */

// [[1,2],[4,5,6],[4,5],[5,6],[6]]
const BFS = (graphs) => {
  const queue = [0];
  const seen = {};
  const values = [];

  while (queue.length) {
    const vertex = queue.shift();
    values.push(vertex);
    seen[vertex] = true;

    const connections = graphs[vertex];
    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];

      if (!seen[connection]) {
        queue.push(connection);
      }
    }
  }
  return values;
};

const testArr = [[1, 2], [3, 4, 5, 6], [4, 5], [5, 6], [6], [0, 3], [5]];
console.log(BFS(testArr));
const adjacencyList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
];

const traversalBFS = function (graph) {
  const seen = {};
  const queue = [0];
  const values = [];

  while (queue.length) {
    const vertex = queue.shift();

    values.push(vertex);
    seen[vertex] = true;

    const connections = graph[vertex];
    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];
      if (!seen[connection]) {
        queue.push(connection);
      }
    }
  }

  return values;
};

console.log(traversalBFS(testArr));
