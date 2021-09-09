https://leetcode.com/problems/number-of-provinces/submissions/


const findCircleNum = (isConnected) => {
  const size = isConnected.length;
  const adjList = new Array(size).fill(0).map(() => []);
  let count = 0;
  let isVisited = new Array(size).fill(false);
  // make a adjacent list visits from each node.
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i !== j && isConnected[i][j]) {
        adjList[i].push(j);
      }
    }
  }
  const queue = [];// initialising a queue that takes all the cities in a province
  for (let a = 0; a < adjList.length; a++) {
    if (!isVisited[a]) {
        // if not visited then this is a new provinces so count ++
      count++;
    } else {
      continue;
    }
    queue.push(adjList[a]);// push the adjacent list at the current province
    while (queue.length > 0) {// we will visit all the places that is directly and indirectly connected with a by utilising the queue
      const curr = queue.shift();
      for (let i = 0; i < curr.length; i++) {// here we visit all the place directly connected with city a
        if (isVisited[curr[i]]) {// we have alread visited here either its in the queue or its direct connections are already iterated
          continue;
        } else {
          queue.push(adjList[curr[i]]);
          isVisited[curr[i]] = true; // store all the places that we visited
        }
      }
    }
  }
  return count;
};

console.log(findCircleNum([[[0]]]));
