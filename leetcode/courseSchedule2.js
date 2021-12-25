var findOrder = function (numCourses, prerequisites) {
  const res = [];
  const inDegrees = new Array(numCourses).fill(0);
  const adjList = new Array(numCourses).fill(0).map(() => []);
  const q = [];

  for (let i = 0; i < prerequisites.length; i++) {
    const x = prerequisites[i][0];
    const y = prerequisites[i][1];
    adjList[y].push(x);
    inDegrees[x]++;
  }
  for (let i = 0; i < inDegrees.length; i++) {
    if (inDegrees[i] === 0) {
      q.push(i);
    }
  }
  while (q.length) {
    const curr = q.shift();
    res.push(curr);
    numCourses--; // we do this to see if completion of course is possible
    for (const x of adjList[curr]) {
      inDegrees[x]--;
      if (inDegrees[x] === 0) {
        q.push(x);
      }
    }
  }
  return numCourses === 0 ? res : [];
};

const numCourses = 4,
  prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ];

console.log(findOrder(numCourses, prerequisites));
