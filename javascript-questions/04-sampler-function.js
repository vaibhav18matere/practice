// Sampler function :

// - If you want make api calls to the server on every nth click -

// - we can define at which stage the function will get execute.

// - A function which accepts a function as an input and a count
// & executes that input function for that given count of calls.

const samplerFun = (callback, count = 1) => {
  let trackOfReturnFun = 0;
  return function (...args) {
    trackOfReturnFun++;
    if (trackOfReturnFun == count) {
      callback(...args);
      trackOfReturnFun = 0;
    }
  };
};

function printMsg(msg) {
  console.log(msg);
}

const handler = samplerFun(printMsg, 3);

handler("1");
handler("2");
handler("3");
handler("4");
handler("5");
handler("6");
handler("7");
handler("8");
handler("9");
handler("10");
// only 3, 6 and 9 will be printed because sampler function uis calling a function when track is 3,6,9,12...etc
