function DFS(curr, target, visited = {}) {
  if (curr === target) {
    return true;
  }
  for (next in curr.neighbour) {
    if (!visited[next]) {
      visited[next] = true;
      if (DFS(next, target, visited) === true) {
        return true;
      }
    }
  }
  return false;
}
