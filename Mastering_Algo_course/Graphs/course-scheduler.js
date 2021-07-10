/* https://leetcode.com/problems/course-schedule/ */

function canFinish(numCourses, prerequisites) {
  const ajdList = new Array(numCourses).fill(0).map(() => []);
  for (let c = 0; c < prerequisites.length; c++) {
    const index = prerequisites[c][1];
    ajdList[index].push(prerequisites[c][0]);
  }
  for (let v = 0; v < numCourses; v++) {
    const seen = {};
    const queue = [...ajdList[v]];
    while (queue.length) {
      const current = queue.shift();
      seen[current] = true;
      if (current === v) {
        //we have a cycle
        return false;
      }
      const adjacent = ajdList[current];
      for (let i = 0; i < adjacent.length; i++) {
        const next = adjacent[i];
        if (!seen[next]) {
          queue.push(next);
        }
      }
    }
  }
  return true;
}

/* Topological sort, best method 
Directed Acyclic Graph- there should not be any cycle
topological sort is only able to take values whose indegree value is one
*/

const canFinish2 = (n, prerequisites) => {
  const inDegree = new Array(n).fill(0);
  const adjList = inDegree.map(() => []);

  for (let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    inDegree[pair[0]]++;
    adjList[pair[1]].push(pair[0]); // we are pushing the re
  }
  // we need some kind of datasctructure to know which vertex is having zero so that we take that
  const stack = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      stack.push(i);
    }
  }

  let count = 0;
  while (stack.length) {
    const current = stack.pop();
    count++;
    const adj = adjList[current];
    for (let i = 0; i < adj.length; i++) {
      const next = adj[i];
      inDegree[next]--;
      if (inDegree[next] === 0) {
        stack.push(next);
      }
    }
  }
  return count === n;
};
