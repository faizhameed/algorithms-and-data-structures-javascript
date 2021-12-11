var alienOrder = function (words) {
  const graph = {};
  words.forEach((word) => word.split("").forEach((l) => (graph[l] = [])));
  // build relationship graph
  for (let i = 0; i < words.length - 1; i++) {
    const first = words[i];
    const second = words[i + 1];
    if (first.length > second.length && first.startsWith(second)) return "";
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
    if (visiting.has(char)) return false; // are we still visiting this, if yes then this is a cycle
    if (visited.has(char)) return true; // we already checked this and need not check again
    visiting.add(char);
    for (let n of graph[char]) {
      // if any of the the val pointed form a cycle then return false
      if (!dfs(n)) return false;
    }
    visiting.delete(char); // delete the char after the visiting process done
    visited.add(char); // add to the visited point
    result.push(char); // now push the least significant first and in the end we reverse the order
    return true;
  };
  for (const [key, val] of Object.entries(graph)) {
    if (!dfs(key)) return "";
  }
  return result.reverse().join("");
};

const words = ["abc", "ab"];

console.log(alienOrder(words));
