// here is json data, show on console and on UI - names and age of emp having age more than 30 in thjis format => name:age; ex. A:55

let emp = [
  {
    name: "A",
    age: 55
  },
  {
    name: "b",
    age: 12
  },
  {
    name: "c",
    age: 25
  },
  {
    name: "d",
    age: 21
  },
  {
    name: "e",
    age: 87
  }
];

const selectedUsers = emp
  .filter((elm) => {
    return elm.age > 30;
  })
  .map((val) => {
    // return `${val.name}:${val.age}`;
    var usersToShow = document.createElement("h3");
    var usersDsta = (usersToShow.innerHTML = `${val.name}:${val.age}`);
    document.body.appendChild(usersToShow);
    return usersDsta;
  });

console.log(selectedUsers);

