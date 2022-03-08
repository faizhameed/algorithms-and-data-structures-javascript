var findCheapestPrice = function (n, flights, src, dst, k) {
  //brute force
  // if(!flights.length)return 0
  let minPrice = Infinity;
  const adjList = new Array(n).fill(0).map(() => []);
  const priceMap = {};
  const dp = new Array(n).fill(Infinity); // cheapest price to each destination
  for (const f of flights) {
    adjList[f[0]].push(f[1]);
    priceMap[`${f[0]}-${f[1]}`] = f[2];
  }

  // console.log(adjList,priceMap)

  function dfs(d, currStop, currPrice) {
    if (d === dst) {
      minPrice = Math.min(currPrice, minPrice);
      return;
    }
    if (currStop > k) {
      return;
    }
    for (const a of adjList[d]) {
      dfs(a, currStop + 1, currPrice + priceMap[`${d}-${a}`]);
    }
  }

  dfs(src, 0, 0);
  return minPrice === Infinity ? -1 : minPrice;
};

var findCheapestPrice = function (n, flights, src, dst, k) {
  const adjList = Array(n)
    .fill(0)
    .map(() => []);

  for (const [start, end, cost] of flights) {
    adjList[start].push([end, cost]);
  }

  const destStop = new Array(n).fill(null);

  const queue = [[src, 0, k + 1]];

  while (queue.length) {
    const [curr, cost, stops] = queue.pop();
    destStop[curr] = stops;
    if (curr === dst) return cost;
    if (stops <= 0) continue;
    for (const [nextD, nextC] of adjList[curr]) {
      const arrivalT = nextC + cost;
      if (destStop[nextD] !== null && destStop[nextD] >= stops - 1) continue;
      queue.push([nextD, arrivalT, stops - 1]);
    }
    queue.sort((a, b) => b[1] - a[1]);
  }
  return -1;
};
