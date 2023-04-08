//  what is promise.all
// 1. It will return a promise.
// 2. The promise will resolve with the result of all the passed promises or reject with the error message of the first failed promise.
// 3. The results are returned in the same order as the promises are in the given array.

const myPromiseAll = function (taskList) {
  const results = [];
  //to track how many promises have completed
  let promisesCompleted = 0;
  // return new promise
  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index) => {
      //if promise passes
      promise
        .then((val) => {
          //store its outcome and increment the count
          results[index] = val;
          promisesCompleted += 1;
          //if all the promises are completed,
          // resolve and return the result
          if (promisesCompleted === taskList.length) {
            resolve(results);
          }
        })
        //if any promise fails, reject.
        .catch((error) => {
          reject(error);
        });
    });
  });
};

// TEST CASE 1 => Input:
function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}
const taskList2 = [task(1000), task(5000), task(3000)];
//run promise.all
myPromiseAll(taskList2)
  .then((results) => {
    console.log("got results", results);
  })
  .catch(console.error);
// Output:
//"got results" [1000,5000,3000]

// TEST CASE 2 => Input:
function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (time < 3000) {
        reject("Rejected");
      } else {
        resolve(time);
      }
    }, time);
  });
}
const taskList3 = [task(1000), task(5000), task(3000)];
//run promise.all
myPromiseAll(taskList3)
  .then((results) => {
    console.log("got results", results);
  })
  .catch(console.error);
//Output: "Rejected";
