const outputTimer = document.getElementById("timer");
const numbers = document.querySelectorAll("li");
const numbersValue = [];
let time = 5;

// generate number bases on numbers of li
for (let i = 0; i < numbers.length; i++) {
  const number = getRandomInt(1, 100); // Generate random int between 1 and 100
  numbers[i].innerHTML = number; // write number in the DOM
  numbersValue.push(number); // add value to array
}

// Set timer and display it in the DOM
outputTimer.innerText = time;
const timerDisplay = setInterval(changeTime, 1000); // run changeTime function every second

setTimeout(hideNumbers, time * 1000); // 5 seconds timer
setTimeout(askUser, time * 1100); // 5,5 seconds timer

function hideNumbers() {
  document.querySelector("ul").style.display = "none"; // ul to display: none
}

function askUser() {
  clearInterval(timerDisplay);

  const userNumbers = []; // init userNumbers array
  const guessNumbers = []; // init guessNumbers array

  // ask numbers to user & check if user numbers are correct
  for (let i = 0; i < numbers.length; i++) {
    let userNumber;
    while (isNaN(userNumber))
      userNumber = parseInt(
        prompt(`Write one of the number you have seen. Number ${i + 1}`)
      );
    userNumbers.push(userNumber);

    // check if numbers are correct
    if (numbersValue.includes(userNumbers[i])) {
      guessNumbers.push(userNumbers[i]);
    }
  }

  // output guessed numbers
  const output = document.querySelector("#output");

  if (guessNumbers.length == 0) {
    output.innerHTML = "None of the numbers chosen are correct.";
  } else {
    output.innerHTML = `You have guessed the following numbers: <strong>${guessNumbers.join(
      ", "
    )}</strong>.<br><strong>${guessNumbers.length}</strong> out of <strong>${
      numbers.length
    }</strong>`;
  }
}

/**
 * Change time and write it in the DOM
 */
function changeTime() {
  if (time == 0) return; // Prevet time variable < 0
  time--;
  outputTimer.innerText = time;
}

/**
 * Generate a number between 2 numbers
 * @param {*} min
 * @param {*} max
 * @returns
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}
