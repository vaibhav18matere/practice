// Que : Create 'clearAllTimeout" which will stop all the timers running.

// 1. what is "setTimeout" ?

setTimeout(funToExecute, 1000);

function funToExecute() {
  console.log("function will start executing after the given time");
}

// ex. 2

setTimeout(() => {
  console.log("It executes only once.");
}, 2000);

// 2. what is "setInterval" ?

// setInterval(() => {
//   console.log(
//     "setInterval - It will keep running untill 'clearInterval' is not called"
//   );
// }, 2000);
