var getDirections = function (root, startValue, destValue) {
  const adjList = [];
  function DFS(curr) {
    if (!adjList[curr.val]) {
      adjList[curr.val] = [null];
    }
    if (curr.left) {
      adjList[curr.val].push(curr.left.val);
      adjList[curr.left.val] = [curr.val];
      DFS(curr.left);
    } else {
      adjList[curr.val].push(null);
    }
    if (curr.right) {
      adjList[curr.val].push(curr.right.val);
      adjList[curr.right.val] = [curr.val];
      DFS(curr.right);
    } else {
      adjList[curr.val].push(null);
    }
  }
  DFS(root);
  // now with the adjlist we find the shortest path using Dijkstra
  const seen = new Array(adjList.length).fill(false);

  const queue = [[startValue, ""]];
  seen[startValue] = true;
  while (queue.length) {
    const [curr, str] = queue.shift();
    if (curr === destValue) return str;
    const [H, L, R] = adjList[curr];
    if (H && !seen[H]) {
      seen[H] = true;
      queue.push([H, str + "U"]);
    }
    if (L && !seen[L]) {
      seen[L] = true;
      queue.push([L, str + "L"]);
    }
    if (R && !seen[R]) {
      seen[R] = true;
      queue.push([R, str + "R"]);
    }
  }
};

// better solution
var getDirections = function (root, startValue, destValue) {
  const getPath = (node, value, acc = "") => {
    if (node === null) {
      return "";
    } else if (node.val === value) {
      return acc;
    } else {
      return (
        getPath(node.left, value, acc + "L") +
        getPath(node.right, value, acc + "R")
      );
    }
  };

  // generate the paths
  let startPath = getPath(root, startValue);
  let destPath = getPath(root, destValue);

  // find the lowest common ancestor
  const condition = (i) =>
    i < startPath.length && i < destPath.length && startPath[i] === destPath[i];
  let i = 0;
  while (condition(i)) i++;

  // output the final path
  let output = "";
  for (let j = i; j < startPath.length; j++) {
    output += "U";
  }

  return output + destPath.substring(i);
};
