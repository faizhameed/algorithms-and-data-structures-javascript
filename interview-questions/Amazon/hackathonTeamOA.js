// Amazon is hosting a hackathon question

function findNumberOfTeams(skills, teamSize, maxDiff) {
  let count = 0;
  const n = skills.length;
  skills.sort((a, b) => a - b);
  let i = 0,
    j = teamSize - 1;
  while (j < n) {
    if (skills[j] - skills[i] <= maxDiff) {
      count++;
      i = j + 1;
      j = i + teamSize - 1;
    } else {
      i += 1;
      j += 1;
    }
  }

  return count;
}

const skills = [1, 4, 2, 3, 4, 2, 2, 2, 4],
  teamSize = 3,
  max_diff = 2;

console.log(findNumberOfTeams(skills, teamSize, max_diff));
