function openLock(deadends, target) {
  const dead = new Set(deadends);
  const queue = [["0000", 0]]; //we have the initial start and the turns
  const seen = { "0000": true };
  for (let [curr, turns] of queue) {
    if (curr === target) return turns;
    if (dead.has(curr)) continue;
    for (let nextStep of getNewCombinations(curr)) {
      if (seen[nextStep]) continue;
      seen[nextStep] = true;
      queue.push([nextStep, turns + 1]);
    }
  }
  return -1;
}

function getNewCombinations(curr = "0000") {
  const comb = [];
  for (let i = 0; i < curr.length; i++) {
    comb.push(
      curr.slice(0, i) + ((+curr[i] + 1) % 10).toString() + curr.slice(i + 1)
    );
    comb.push(
      curr.slice(0, i) + ((+curr[i] + 9) % 10).toString() + curr.slice(i + 1)
    );
  }
  return comb;
}

const deadends = ["2110", "0202", "1222", "2221", "1010"];
const target = "2010";
console.log(openLock(deadends, target));
