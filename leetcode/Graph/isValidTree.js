var validTree = function (n, edges) {
  const seen = new Map();
  seen.set(0, -1);
  const stack = [0];
  const adjList = new Array(n).fill(0).map(() => []);
  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    adjList[edge[1]].push(edge[0]);
    adjList[edge[0]].push(edge[1]);
  }
  while (stack.length) {
    const node = stack.pop();
    for (const neighbour of adjList[node]) {
      //trivial cycle ignore
      if (seen.get(node) === neighbour) {
        continue;
      }
      // this is a cycle because we already seen this and
      //its connected to a different node too
      if (seen.has(neighbour)) {
        return false;
      }
      // otherwise put the neighbour on to the stack
      // and record that it has been seen
      stack.push(neighbour);
      seen.set(neighbour, node);
    }
  }
  return seen.size === n;
};
const n = 5,
  edges = [
    [0, 1],
    [1, 2],
    [3, 4],
  ];
console.log(validTree(n, edges));
