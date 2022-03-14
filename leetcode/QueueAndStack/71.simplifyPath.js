var simplifyPath = function (path) {
  const stack = [];
  const directories = path.split("/");

  for (const d of directories) {
    if (d === "." || d === "") {
      continue;
    }
    if (d === "..") {
      if (stack.length) {
        stack.pop();
      }
      continue;
    }
    stack.push(d);
  }

  const res = [];
  for (const item of stack) {
    res.push("/");
    res.push(item);
  }
  if (res.length === 0) return "/";
  return res.join("");
};

console.log(simplifyPath("/home/foo/.../fazs/../dos//sdsd"));
