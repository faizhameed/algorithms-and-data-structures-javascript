var subdomainVisits = function (cpdomains) {
  const mapOrg = {};

  for (let i = 0; i < cpdomains.length; i++) {
    const subs = cpdomains[i].split(" "); //O(S)
    const count = parseInt(subs[0]);
    let curr = "";
    const domain = subs[1].split("."); //O(S)
    while (domain.length) {
      //O(d) negligible
      if (curr === "") {
        curr = domain.pop();
      } else {
        curr = domain.pop() + "." + curr;
      }
      if (mapOrg[curr]) {
        mapOrg[curr] += count;
      } else {
        mapOrg[curr] = count;
      }
    }
  }
  const res = [];
  Object.entries(mapOrg).forEach(([k, v]) => res.push(`${v} ${k}`));
  return res;
};

console.log(
  subdomainVisits([
    "9001 discuss.leetcode.com",
    "90 google.com",
    "20 cow.google.com",
  ])
);
