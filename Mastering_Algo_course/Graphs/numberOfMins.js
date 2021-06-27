/* https://leetcode.com/problems/time-needed-to-inform-all-employees/ */
const numOFMinutes = (n, head1D, managers, informTime) => {
  const adjList = managers.map(() => []);
  for (let i = 0; i < n; i++) {
    const manager = managers[e];
    if (manager === -1) continue;
    adjList[manager].push(e);
  }
  return dfs(head1D, adjList, informTime);
};

const dfs = (currentID, adjList, informTime) => {
  if (adjList[currentID].length === 0) {
    return 0;
  }
  let max = 0;
  const subOrdinates = adjList[currentID];
  for (let i = 0; i < subOrdinates.length; i++) {
    max = Math.max(max, dfs(subOrdinates[i], adjList, informTime));
  }
  return max + informTime[currentID];
};
