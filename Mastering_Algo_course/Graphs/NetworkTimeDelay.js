/* 
Greedy algorithm
S->A costs 2
S->B costs 4
then we take S->A which is less
at each step we take the least weighted path
times[i] = (ui, vi, wi)
*/

const networkTimeDelay = (times, n, k) => {
  // create and array with infinite time
  const distances = new Array(n).fill(Infinity);

  const adjList = distances.map(() => []);

  distances[k - 1] = 0; // since distance from point to same point

  const heap = new PriorityQueue((a, b) => distances[a] < distances[b]);
  heap.push(k - 1);
  for (let i = 0; i < times.length; i++) {
    const sourceNode = times[i][0];
    const targetNode = times[i][1];
    const weight = times[i][2];
    adjList[sourceNode - 1].push([targetNode - 1, weight]);
  }
  while (!heap.isEmpty()) {
    const currentVertex = heap.pop();
    const adjacent = adjList[currentVertex];
    const currentWeight = distances[currentVertex];
    for (let i = 0; i < adjacent.length; i++) {
      const target = adjacent[i][0];
      const weight = adjacent[i][1];
      if (distances[target] > currentWeight + weight) {
        distances[target] = currentWeight + weight;
        heap.push(target);
      }
    }
  }
  const ans = Math.max(...distances);
  return ans === Infinity ? -1 : ans;
};
