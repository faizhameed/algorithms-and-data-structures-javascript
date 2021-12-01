var canVisitAllRooms = function (rooms) {
  const queue = [rooms[0]]; // first room can be visited
  const canVisit = new Array(rooms.length).fill(false);
  canVisit[0] = true;
  // how do I know which index
  while (queue.length) {
    const curRoom = queue.shift();
    for (const key of curRoom) {
      //todo key for the curRoom should not be inside the curRoom itself
      if (rooms[key] !== curRoom && !canVisit[key]) {
        canVisit[key] = true;
        queue.push(rooms[key]);
      }
    }
  }
  return canVisit;
};

console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));
