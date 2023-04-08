// 1. Function takes an array of promises as input and returns a new promise.
// 2. The returned promise is resolved as soon as any of the input promises resolves.
// 3. Else if all of the input promises are rejected then the returned
// promise is rejected with the array of all the input promises reasons.

const any = function (promisesArray) {
  const promiseErrors = new Array(promisesArray.length);
  let counter = 0;
  //return a new promise
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      Promise.resolve(promise)
        .then(resolve) // resolve, when any of the input promise resolves
        .catch((error) => {
          promiseErrors[counter] = error;
          counter = counter + 1;
          if (counter === promisesArray.length) {
            // all promises rejected, reject outer promise
            reject(promiseErrors);
          }
        });
    });
  });
};

// Test case 1 => Input:
const test1 = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, "one");
});
const test2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 600, "two");
});
const test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, "three");
});
any([test1, test2, test3])
  .then(function (value) {
    // first and third fails, 2nd resolves
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
// Output: "two"

// Test case 2 => Input:
const test4 = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, "one");
});
const test5 = new Promise(function (resolve, reject) {
  setTimeout(reject, 600, "two");
});
const test6 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, "three");
});
any([test4, test5, test6])
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    // all three fails
    console.log(err);
  });
// Output: ["three", "one", "two"];
