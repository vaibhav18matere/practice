// create new promise and show conditional results using .then() and .catch()

const testPromise = new Promise((res, rej) => {
  let value = 2;
  if (value < 5) {
    res("success : less than 5");
  } else {
    rej("failure : more than 5");
  }
});

testPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
