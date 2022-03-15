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

  const stack = [[src, 0, k + 1]];

  while (stack.length) {
    const [curr, cost, stops] = stack.pop();
    // stack so that its faster
    destStop[curr] = stops;
    if (curr === dst) return cost;
    if (stops <= 0) continue;
    for (const [nextD, nextC] of adjList[curr]) {
      const arrivalT = nextC + cost;
      if (destStop[nextD] !== null && destStop[nextD] >= stops - 1) continue;
      stack.push([nextD, arrivalT, stops - 1]);
    }
    stack.sort((a, b) => b[1] - a[1]);
  }
  return -1;
};

/* Bellman's ford approach */

var findCheapestPriceBellman = function (n, flights, src, dst, k) {
  let pre = new Array(n).fill(Infinity);
  let curr = new Array(n).fill(Infinity);

  pre[src] = 0;
  // we will have k+1 edges for k stops
  for (let i = 1; i <= k + 1; i++) {
    curr[src] = 0;
    for (const [pre_f, curr_f, cost] of flights) {
      if (pre[pre_f] < Infinity) {
        curr[curr_f] = Math.min(pre[pre_f] + cost, curr[curr_f]);
      }
    }
    // we clone to previouse
    pre = [...curr];
  }
  return curr[dst] === Infinity ? -1 : curr[dst];
};

const n = 3,
  flights = [
    [0, 1, 100],
    [1, 2, 100],
    [0, 2, 500],
  ],
  src = 0,
  dst = 2,
  k = 1;
console.log(findCheapestPriceBellman(n, flights, src, dst, k));
