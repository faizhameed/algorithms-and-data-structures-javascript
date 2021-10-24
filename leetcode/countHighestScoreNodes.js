var countHighestScoreNodes = function (parents) {
  const n = parents.length;

  const g = new Array(n).fill(0).map(() => []);
  let maxScore = -1,
    count = 0;
  for (let i = 0; i < n; i++) {
    if (parents[i] === -1) {
      continue;
    }
    g[parents[i]].push(i); // for each node we have the list of child
  }

  function DFS(index) {
    let p = 1,
      subtree = 0; // to count total nodes below current node
    for (const child of g[index]) {
      const temp = DFS(child); // get total nodes under each child
      subtree += temp; // add all those to the current subtree
      p *= temp; // product of each child subtree count
    }

    if (subtree < n - 1) {
      // if the current node is having a parent
      //which is the current node is child of someparent so we multiply the number of nodes above to this
      p *= n - 1 - subtree; //total parent nodes = (total nodes) - (currentNode 1)- (total nodes in the subtree's count)
    }
    if (p > maxScore) {
      // if product is bigger than current product then we update the maxScore
      maxScore = p;
      count = 1;
    } else if (p === maxScore) {
      // now whoever attains this maxscore we increment the count
      count++;
    }
    return subtree + 1;
  }
  DFS(0); // tranverse from root node

  return count;
};

console.log(countHighestScoreNodes([-1, 2, 0]));
