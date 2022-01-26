var getAllElements = function (root1, root2) {
  const list1 = root1 ? dfs(root1) : [];
  const list2 = root2 ? dfs(root2) : [];
  const list = [];
  let i = 0,
    j = 0;
  while (i < list1.length && j < list2.length) {
    if (list1[i] <= list2[j]) {
      list.push(list1[i]);
      i++;
    } else {
      list.push(list2[j]);
      j++;
    }
  }

  while (i < list1.length) {
    list.push(list1[i]);
    i++;
  }
  while (j < list2.length) {
    list.push(list2[j]);
    j++;
  }

  return list;
};

function dfs(root, list = []) {
  if (root.left) {
    dfs(root.left, list);
  }
  list.push(root.val);
  if (root.right) {
    dfs(root.right, list);
  }
  return list;
}
