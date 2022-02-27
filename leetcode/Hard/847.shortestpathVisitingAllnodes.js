var shortestPathLength = function (graph) {
  const n = graph.length;
  const endingMask = (1 << n) - 1;
  const cache = Array(n + 1)
    .fill(0)
    .map(() => Array(endingMask + 1).fill(0));
  let best = Infinity;
  for (let node = 0; node < n; node++) {
    best = Math.min(best, dp(node, endingMask));
  }
  return best;

  function dp(node, mask) {
    if (cache[node][mask] !== 0) {
      return cache[node][mask];
    }
    if ((mask & (mask - 1)) === 0) {
      return 0;
    }

    cache[node][mask] = Infinity;
    for (const neighbor of graph[node]) {
      //check if the neighbor is visited
      if ((mask & (1 << neighbor)) !== 0) {
        // for eg 1101 and node 2 ,so 1<<2 ==100 so 1101 & 100 will give 100
        const alreadyVisited = dp(neighbor, mask);
        // alreadyVisited this neighbor that means we need not change the mask, it will be same
        const notVisited = dp(neighbor, mask ^ (1 << node));
        // here we are checking a scenario if we haven;t visited the neighbouring node yet,
        //for eg 01^10 will become 11 and 11^10 will become 01
        const best = Math.min(alreadyVisited, notVisited);
        cache[node][mask] = Math.min(best + 1, cache[node][mask]);
      }
    }
    return cache[node][mask];
  }
};

const graph = [[1, 2, 3], [0], [0], [0]];

console.log(shortestPathLength(graph));
