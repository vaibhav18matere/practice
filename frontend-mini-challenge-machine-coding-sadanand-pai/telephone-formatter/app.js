const input = document.getElementById("phone");

let previousNum = '';
let firstThreeNums = '';

input.addEventListener('input', (e) => {

     const userInput = e.target.value;

     // check if user input is numbers or not, don't allow anything else apart from numbers
     // using built-in regex for that

     let NumOnlyInputRegex = /\d+$/g;

     if (NumOnlyInputRegex.test(userInput)) {
          input.value = userInput;
     } else {
          input.value = userInput.substring(0, userInput.length - 1);
     }

     // console.log('previous value : ', previousNum, 'and user input ', userInput);

     if (userInput.length === 4 && previousNum.length < userInput.length) { // to check if we are typing (adding) a number => previousNum.length < userInput.length

          firstThreeNums = userInput.substring(0, 3);
          let forthNum = userInput[userInput.length - 1]

          input.value = `+(${firstThreeNums}) - ${forthNum}`; // formatting the UI as needed ~ by adding (+ 123)

     } else if (userInput.length === 9 && previousNum.length > userInput.length) {  // to check if we are removing it (pressing backspace)

          input.value = firstThreeNums;
          // at 4th index when pressing backspace we are re-setting the digits as plain digit and removing the formatted (+123) UI

     }

     //  length is changing dynamically and based on that we have to format the UI...

     previousNum = userInput;
});