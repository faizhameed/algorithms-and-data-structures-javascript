function numRescueBoats(people, limit) {
  const n = people.length;
  let boats = 0;
  people.sort((a, b) => a - b);
  let i = 0,
    j = n - 1;
  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      i++;
    }
    j--;
    boats++;
  }
  return boats;
}
const people = [3, 2, 2, 1],
  limit = 3;
console.log(numRescueBoats(people, limit));
