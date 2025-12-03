var calcEquation = function (equations, values, queries) {
  const adj = {};
  for (const i in equations) {
    const [a, b] = equations[i];
    const value = values[i];
    adj[a] ? adj[a].push([b, value]) : (adj[a] = [[b, value]]);
    adj[b] ? adj[b].push([a, 1 / value]) : (adj[b] = [[a, 1 / value]]);
  }

  const bfs = (src, target) => {
    if (!adj[src] || !adj[target]) {
      return -1;
    }
    const queue = [[src, 1]];
    const visited = new Set();
    visited.add(src);
    while (queue.length) {
      const [node, weight] = queue.shift();
      if (node == target) {
        return weight;
      }
      for (const [n, w] of adj[node]) {
        if (!visited.has(n)) {
          queue.push([n, w * weight]);
          visited.add(n);
        }
      }
    }
    return -1;
  };

  const result = [];

  for (const [src, target] of queries) {
    result.push(bfs(src, target));
  }

  return result;
};

// Test cases
console.log(
  calcEquation(
    [
      ["a", "b"],
      ["b", "c"],
    ],
    [2.0, 3.0],
    [
      ["a", "c"],
      ["b", "a"],
      ["a", "e"],
      ["a", "a"],
      ["x", "x"],
    ]
  )
); // [6.00000,0.50000,-1.00000,1.00000,-1.00000]

console.log(
  calcEquation(
    [
      ["x1", "x2"],
      ["x2", "x3"],
      ["x3", "x4"],
      ["x4", "x5"],
    ],
    [3.0, 4.0, 5.0, 6.0],
    [
      ["x1", "x5"],
      ["x5", "x2"],
      ["x2", "x4"],
    ]
  )
);
// [360.00000,0.00833,20.00000]
