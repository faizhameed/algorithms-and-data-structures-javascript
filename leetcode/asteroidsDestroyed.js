var asteroidsDestroyed = function (mass, asteroids) {
  // return true if all the asteroids can be destroyed

  asteroids.sort((a, b) => b - a);

  while (asteroids.length) {
    const curAs = asteroids.pop();
    if (curAs <= mass) {
      mass += curAs;
    } else {
      return false;
    }
    console.log(mass);
  }
  return true;
};

const mass = 5,
  asteroids = [4, 9, 23, 4];
console.log(asteroidsDestroyed(mass, asteroids));
