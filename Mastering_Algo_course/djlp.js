var people = [
  {
    name: "Carla",
    dob: "2018-05-08T01:36:57-07:00",
    country: "Germany",
  },
  {
    name: "Abdul",
    dob: "2018-02-17T19:14:50-08:00",
    country: "Italy",
  },
  {
    name: "Hermione",
    dob: "2018-12-24T18:27:45-08:00",
    country: "United Kingdom",
  },
  {
    name: "Mufutau",
    dob: "2018-05-10T23:25:05-07:00",
    country: "Italy",
  },
  {
    name: "Whitney",
    dob: "2018-11-12T11:31:51-08:00",
    country: "France",
  },
  {
    name: "Aquila",
    dob: "2018-04-06T03:07:24-07:00",
    country: "Austria",
  },
  {
    name: "Wanda",
    dob: "2019-01-21T19:08:25-08:00",
    country: "United Kingdom",
  },
  {
    name: "Mason",
    dob: "2018-08-18T16:43:49-07:00",
    country: "United Kingdom",
  },
  {
    name: "Ruby",
    dob: "2019-06-15T12:17:01-07:00",
    country: "United Kingdom",
  },
  {
    name: "Vineet",
    dob: "2018-05-27T10:25:53-07:00",
    country: "Italy",
  },
  {
    name: "Justine",
    dob: "2019-06-07T19:52:15-07:00",
    country: "Germany",
  },
  {
    name: "Ariana",
    dob: "2018-11-14T16:33:03-08:00",
    country: "Germany",
  },
  {
    name: "Kasper",
    dob: "2020-02-01T17:53:51-08:00",
    country: "France",
  },
  {
    name: "Vineet",
    dob: "2019-09-24T21:11:30-07:00",
    country: "India",
  },
  {
    name: "Kirby",
    dob: "2019-02-20T11:52:05-08:00",
    country: "France",
  },
  {
    name: "Hadley",
    dob: "2018-12-05T02:56:02-08:00",
    country: "India",
  },
  {
    name: "Nash",
    dob: "2019-09-29T15:07:26-07:00",
    country: "Germany",
  },
  {
    name: "Wanda",
    dob: "2018-11-02T15:38:38-07:00",
    country: "France",
  },
  {
    name: "Hedwig",
    dob: "2019-09-20T21:37:46-07:00",
    country: "France",
  },
  {
    name: "Mufutau",
    dob: "2018-09-07T05:38:30-07:00",
    country: "Italy",
  },
  {
    name: "Maite",
    dob: "2018-03-02T04:51:08-08:00",
    country: "France",
  },
  {
    name: "Clio",
    dob: "2018-04-30T10:24:30-07:00",
    country: "Austria",
  },
  {
    name: "Kiara",
    dob: "2018-05-11T05:27:44-07:00",
    country: "Germany",
  },
];

// you can code from here
const nameSort = (arr) => {
  let map = [],
    newArray = [];

  for (let i = 0; i < arr.length; i++) {
    map.push(arr[i].name);
  }
  map.sort();

  for (let j = 0; j < map.length; j++) {
    let currentElement = map[j];

    for (let k = 0; k < arr.length; k++) {
      if (arr.name === currentElement) {
        newArray.push(arr[k]);
      }
    }
  }
};

people.sort((a, b) => +new Date(a.dob) - +new Date(b.dob));

// getTime()

// ['Austra','India'....]

const listCountries = (arr) => {
  let map = {};

  arr.forEach(
    (i) => {
      /*---*/
      if (!map[arr.country]) {
        map[arr.country] = true;
      }
    }
    /*---*/
  );

  let newArr = [];

  Object.keys(map).forEach((i) => {
    newArr.push(i);
  });

  return newArr;
};
/*---------*/

var text = "outside";
function logIt() {
  var text;
  console.log(text);
  text = "inside";
}
logIt();

// undefined
