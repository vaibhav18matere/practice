// console.log("start from here");

const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

const counterVal = document.getElementById("counter-value");

const changeBy = document.querySelector("#changeBy");

const incrementHandler = () => {
     const inputCounterDefaultValue = parseInt(changeBy.value);
     // console.log(inputCounterDefaultValue);
     counterVal.innerText = parseInt(counterVal.innerText) + inputCounterDefaultValue
};
const decrementHandler = () => {
     const inputCounterDefaultValue = parseInt(changeBy.value);
     const currentCounterValue = parseInt(counterVal.innerText);
     counterVal.innerText = currentCounterValue - inputCounterDefaultValue;

};
const resetHandler = () => {
     counterVal.innerText = 0;
};



incrementBtn.addEventListener("click", incrementHandler);
decrementBtn.addEventListener("click", decrementHandler);
resetBtn.addEventListener("click", resetHandler);

