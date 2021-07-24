/* 
if negative weights are considered, we consider belman ford
*/

const networkDelayTime = (times, n, k) => {
  const distance = new Array(n).fill(Infinity);
  distance[k - 1] = 0;
  for (let i = 0; i < n - 1; i++) {
    let isChanged = false;
    for (let j = 0; j < times.length; j++) {
      const source = times[j][0];
      const target = times[j][1];
      const weight = times[j][2];
      if (distance[source] + weight < distance[target]) {
        distance[target] = distance[source] + weight;
        isChanged = true;
      }
    }
    if (!isChanged) break;
  }

  const ans = Math.max(...distance);
  return ans === Infinity ? -1 : ans;
};
