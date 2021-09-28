function floodfill(image, sr, sc, newColor) {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const queue = [[sr, sc]];
  const colorCode = image[sr][sc];
  const seen = new Array(image.length)
    .fill(0)
    .map(() => new Array(image[0].length).fill(false));
  while (queue.length) {
    const curr = queue.shift();
    // adding new color to those in queue
    image[curr[0]][curr[1]] = newColor;
    seen[curr[0]][curr[1]] = true;
    for (let i = 0; i < directions.length; i++) {
      const row = directions[i][0] + curr[0];
      const col = directions[i][1] + curr[1];
      if (
        row >= 0 && //if the row and col is in the matrix range
        row < image.length &&
        col >= 0 &&
        col < image[0].length &&
        colorCode === image[row][col] && // if the color code at starting pixel is same as the current position
        !seen[row][col]
      ) {
        queue.push([row, col]);
      }
    }
  }
  return image;
}

const image = [
    [0, 0, 0],
    [0, 1, 1],
  ],
  sr = 1,
  sc = 1,
  newColor = 1;
console.log(floodfill(image, sr, sc, newColor));
