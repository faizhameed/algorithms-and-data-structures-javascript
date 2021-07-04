/* https://leetcode.com/problems/time-needed-to-inform-all-employees/ 
n number of employees

*/
const numOFMinutes = (n, head1D, managers, informTime) => {
  const adjList = managers.map(() => []);
  for (let i = 0; i < n; i++) {
    const manager = managers[i];
    if (manager === -1) continue;
    adjList[manager].push(i);
  }
  // now we get list of employees under each manager if there is no employee under any employee we have empty array at that index
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
  return max + informTime[currentID]; //maxtime to send news to the lower employee + time taken to inform by the current Manager
};
