// Promise.allSettled() takes an array of promises as input and returns
// an array with the result of all the promises whether they are rejected or resolved.

const allSettled = (promises) => {
  // map the promises to return a custom response.
  const mappedPromises = promises.map((p) =>
    Promise.resolve(p).then(
      (val) => ({ status: "fulfilled", value: val }),
      (err) => ({ status: "rejected", reason: err })
    )
  );
  // run all the promises once with .all
  return Promise.all(mappedPromises);
};
// test 1 => Input:
const a = new Promise((resolve) =>
  setTimeout(() => {
    resolve(3);
  }, 200)
);
const b = new Promise((resolve, reject) => reject(9));
const c = new Promise((resolve) => resolve(5));
allSettled([a, b, c]).then((val) => {
  console.log(val);
});
//output will be
[
  {
    status: "fulfilled",
    value: 3,
  },
  {
    status: "rejected",
    reason: 9,
  },
  {
    status: "fulfilled",
    value: 5,
  },
];
