const findMinHeightTrees = (n, edges) => {
  if (n === 1) return [0];
  const adjList = new Array(n).fill(0).map(() => []);
  const degree = Array(n).fill(0);
  for (const [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
    degree[u]++;
    degree[v]++;
  }

  console.log(adjList);

  let leaves = [];

  for (let i = 0; i < n; i++) {
    if (degree[i] === 1) leaves.push(i);
  }

  let remainingNodes = n;
  while (remainingNodes > 2) {
    remainingNodes -= leaves.length;

    const newLeaves = [];

    for (let leaf of leaves) {
      for (const neighbor of adjList[leaf]) {
        degree[neighbor]--;
        if (degree[neighbor] === 1) {
          newLeaves.push(neighbor);
        }
      }
    }
    leaves = Array.from(newLeaves);
  }
  return leaves;
};

const n = 6;
const edges = [
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 4],
  [5, 4],
];

console.log(findMinHeightTrees(n, edges));
