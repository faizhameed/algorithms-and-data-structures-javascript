//323. Number of Connected Components in an Undirected Graph

var countComponents = function (n, edges) {
  let count = 0;
  const visited = new Array(n).fill(false);
  const adjList = new Array(n).fill(0).map(() => []);
  for (let i = 0; i < edges.length; i++) {
    const f = edges[i][0];
    const t = edges[i][1];
    adjList[f].push(t);
    adjList[t].push(f);
  }

  for (let i = 0; i < adjList.length; i++) {
    if (visited[i] === false) {
      count++;
      dfs(i);
    }
  }

  function dfs(i) {
    visited[i] = true;
    const nodes = adjList[i];
    for (const node of nodes) {
      if (visited[node] === false) {
        dfs(node);
      }
    }
  }
  return count;
};

const n = 5,
  graph = [
    [0, 1],
    [1, 2],
    [3, 4],
  ];
console.log(countComponents(n, graph));
