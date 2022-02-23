/*
 * BFS Method
 */

var cloneGraph = function (node) {
  // If start node is null than we can't do any cloning
  let start = node;
  if (start === null) return null;
  // vertexMap is the original node reference to our node
  const vertexMap = new Map();

  // Add the start node to the queue. Give the start node a clone in the vertex map
  const queue = [start];
  vertexMap.set(start, new Node(start.val));

  /*
   * Breadth first search continues unitil we process all the vertices in the graph
   * In the original graph. We know this is done when queue is empty
   */

  while (queue.length > 0) {
    // We grab a node. We will express all of the edges coming off of this node.
    const currentVertex = queue.shift();
    // Iterate over all adjacents.
    for (const neighbor of currentVertex.neighbors) {
      // Has this neighbor been given a clone?
      if (!vertexMap.has(neighbor)) {
        /*
         * No? Give it a mapping and add the original neighbor to the search queue so we
         * can express ITS edges later
         */
        vertexMap.set(neighbor, new Node(neighbor.val));
        queue.push(neighbor);
      }

      /*
       * Draw the edge from currVertex's clone to neighbor's clone. Do you see how our
       * hashtable makes this quick access possible?
       */
      vertexMap.get(currentVertex).neighbors.push(vertexMap.get(neighbor));
    }
  }
  return vertexMap.get(start);
};

/*
 * DFS METHOD
 */
var cloneGraph = function (node) {
  if (node === null) return null;
  const clone = {}; // declare initial clone to map all the nodes

  function traverse(node) {
    if (!clone[node.val]) {
      clone[node.val] = new Node(node.val);
      clone[node.val].neighbors = node.neighbors.map((n) => traverse(n));
    }
    return clone[node.val];
  }
  return traverse(node);
};

/* My own way */
var cloneGraph = function (node) {
  if (!node) return null;
  const cloned = new Node(node.val);
  const clonedNodes = new Map();
  // lets visit all nodes
  function dfs(node, cloneCurr) {
    if (node === null) {
      return;
    }
    node.visited = true;
    clonedNodes.set(node.val, cloneCurr);
    for (const neighbor of node.neighbors) {
      const newNode = new Node(neighbor.val);
      if (!neighbor.visited) {
        cloneCurr.neighbors.push(newNode);
        dfs(neighbor, newNode);
      } else {
        cloneCurr.neighbors.push(clonedNodes.get(newNode.val));
      }
    }
  }
  dfs(node, cloned);
  return cloned;
};
