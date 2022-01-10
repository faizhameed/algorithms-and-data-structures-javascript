var isRobotBounded = function (instructions) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let i = 0,
    x = 0,
    y = 0;
  for (const char of instructions) {
    if (char === "L") {
      i = (i + 1) % 4;
    } else if (char === "R") {
      i = (i + 3) % 4;
    } else {
      x += directions[i][0];
      y += directions[i][1];
    }
  }
  return (x === 0 && y === 0) || i > 0;
};

const instructions = "GLRLLGLL";

console.log(isRobotBounded(instructions));
