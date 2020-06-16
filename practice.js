const p = new Promise((res, rej) => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => res(data))
    .catch((err) => {
      rej(err);
    });
});

p.then((data) => {
  console.log(data);
});

/* *********eXAMPLE******* */
let AuthUser = (data) => {
  return google.login(data.username, data.password).then((token) => {
    return token;
  });
};

let userToken = AuthUser(data);
console.log(userToken); // promise<pending>
/*
 */
let AuthUser = function (data) {
  return google.login(data.username, data.password).then((token) => {
    return token;
  });
};

let userToken = AuthUser(data);
console.log(userToken); // Promise { <pending> }

userToken.then(function (result) {
  console.log(result); // "Some User token"
});
