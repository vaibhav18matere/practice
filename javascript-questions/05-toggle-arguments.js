// create a function that accepts a list of arguments
// and toggles each of them when invoked in a cycle.

// this is based on closure.

const toggleFun = (...args) => {
  let index = 0;
  return function () {
    if (args.length) {
      console.log(args[index++]);

      if (index >= args.length) {
        index = 0;
      }
    }
  };
};

const printMsg = toggleFun("on", "off", "reset");

printMsg();
printMsg();
printMsg();
printMsg();
printMsg();
printMsg();
printMsg();
