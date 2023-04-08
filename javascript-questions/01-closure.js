// a closure gives you access to an outer function's scope from an inner function

// ex. 1
function outer() {
  let name = "vaibhav";
  function inner() {
    console.log(name);
  }
  inner();
}
outer();
// output : vaibhav

// ex. 2
function outer1() {
  let name = "vaibhav2";
  function inner1() {
    function inner2() {
      console.log(name);
    }
    inner2();
  }
  inner1();
}
outer1();
// output : vaibhav2

// but the preference is given to it's immediate scope; for ex -
// ex. 3
function outer2() {
  let name = "vaibhav3";
  function inner3() {
    let name = "vaibhav4";
    function inner4() {
      console.log(name);
    }
    inner4();
  }
  inner3();
}
outer2();
// output : vaibhav4
// not vaibhav3 because of "immediate scope" above to the function

// parallel functions :

function outerFun() {
  let name = "1- outer";
  function innerFun() {
    let name = "1- inner";
    function innerFun2() {
      console.log(name);
    }
    innerFun2();
  }

  function innerFunParallel() {
    let name = "1- inner parallel function call";
    function innerFun2Parallel() {
      console.log(name);
    }
    innerFun2Parallel();
  }
  innerFun();
  innerFunParallel();
}
outerFun();

// can "return" inner function as well -
function outerFn(a) {
  return function innerFn(b) {
    console.log(a * b);
  };
}
const myFun = outerFn(10);
myFun();
// output : NaN

// now, pass the value to inner function as well
function outerFnt(a) {
  return function innerFn(b) {
    console.log(a * b);
  };
}
const multiplyBy10 = outerFnt(10);
multiplyBy10(8);
// output : 50
