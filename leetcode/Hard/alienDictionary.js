var alienOrder = function (words) {
  const graph = {};
  words.forEach((word) => word.split("").forEach((l) => (graph[l] = [])));
  // build relationship graph
  for (let i = 0; i < words.length - 1; i++) {
    const first = words[i];
    const second = words[i + 1];
    const minLength = Math.min(first.length, second.length);
    for (let j = 0; j < minLength; j++) {
      if (first[j] !== second[j]) {
        graph[first[j]].push(second[j]);
        break; // only need to find the first pair
      }
    }
  }
  const visiting = new Set(),
    visited = new Set(),
    result = [];

  //regular graph dfs

  const dfs = (char) => {
    if (visiting.has(char)) return false;
    if (visited.has(char)) return true;
    visiting.add(char);
    for (let n of graph[char]) {
      if (!dfs(n)) return false;
    }
    visiting.delete(char);
    visited.add(char);
    result.push(char);
    return true;
  };
  for (const [key, val] of Object.entries(graph)) {
    if (!dfs(key)) return "";
  }
  return result.reverse().join("");
};

const words = ["wrt", "wrf", "er", "ett", "rftt"];

console.log(alienOrder(words));
