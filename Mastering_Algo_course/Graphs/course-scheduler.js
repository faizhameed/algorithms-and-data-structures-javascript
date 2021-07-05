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
