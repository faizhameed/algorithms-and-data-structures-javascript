var numUniqueEmails = function (emails) {
  const n = emails.length;
  for (let i = 0; i < n; i++) {
    const email = emails[i].split("");
    let j = 0,
      ignore = false;
    while (email[j] !== "@") {
      if (ignore || email[j] === ".") {
        email.splice(j, 1);
      } else if (email[j] === "+") {
        ignore = true;
      } else {
        j++;
      }
    }
    emails[i] = email.join("");
  }
  return new Set(emails).size;
};

const emails = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
];
console.log(numUniqueEmails(emails));
