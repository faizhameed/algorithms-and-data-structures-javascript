// Jumping on the Clouds

function jumpingOnClouds(c) {
  let jump = 0,
    i = 0;
  for (i = 0; i < c.length; i++) {
    if (c[i + 2] !== 1 && c[i + 2] !== undefined) {
      i++;
    }
    jump++;
  }
  return jump - 1;
}
