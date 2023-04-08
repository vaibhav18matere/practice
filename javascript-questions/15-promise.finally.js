// what is promise.finally() do?

// the finally block will always be
// executed at the end, which can be used for cleanup operations.
// Input:
function checkMail() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Mail has arrived");
    } else {
      reject(new Error("Failed to arrive"));
    }
  });
}
checkMail()
  .then((mail) => {
    console.log(mail);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("Experiment completed");
  });
// Output:
// Error: Failed to arrive
//"Experiment completed"

// Que. Make a prototype

Promise.prototype.finally = function (callback) {
  if (typeof callback !== "function") {
    return this.then(callback, callback);
  }
  // get the current promise or a new one
  const P = this.constructor || Promise;
  // return the promise and call the callback function
  // as soon as the promise is rejected or resolved with its value
  return this.then(
    (value) => P.resolve(callback()).then(() => value),
    (err) =>
      P.resolve(callback()).then(() => {
        throw err;
      })
  );
};
