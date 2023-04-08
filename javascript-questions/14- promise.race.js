// The Promise.race() method returns a promise that fulfills or rejects as
// soon as one of the promises in an iterable fulfills or rejects, with the
// value or reason from that promise.

const race = function (promisesArray) {
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      Promise.resolve(promise)
        // resolve, when any of the input promise resolves
        .then(resolve, reject)
        // reject, when any of the input promise rejects
        .catch(reject);
    });
  });
};

// test 1 => Input:
const test1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
const test2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});
const test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, "three");
});
race([test1, test2, test3])
  .then(function (value) {
    // first two resolve, 3rd fails, but promise2 is faster
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
//Output: => "two"

// test case 2 => Input:
const test4 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
const test5 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});
const test6 = new Promise(function (resolve, reject) {
  setTimeout(reject, 40, "three");
});
race([test4, test5, test6])
  .then(function (value) {
    // first two resolve, 3rd fails, but promise3 is faster
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
// Output: "three";
