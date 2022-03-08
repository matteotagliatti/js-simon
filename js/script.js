const numbers = document.querySelectorAll("li");
const numbersValue = [];
const guessNumbers = [];

// generate number bases on numbers of li
for (let i = 0; i < numbers.length; i++) {
  const number = Math.floor(Math.random() * 100);
  numbers[i].innerHTML = number; // write number in the DOM
  numbersValue.push(number); // ad value to array
}

setTimeout(askUser, 10000); // 10 seconds timer

function askUser() {
  // ul to display: none
  const ul = document.querySelector("ul");
  ul.style.display = "none";

  // init userNumbers array
  const userNumbers = [];

  // ask numbers to user
  for (let i = 0; i < numbers.length; i++) {
    const userNumber = parseInt(
      prompt(`Write one of the number you have seen. Number ${i + 1}`)
    );
    userNumbers.push(userNumber);

    if (numbersValue.includes(userNumbers[i])) {
      guessNumbers.push(userNumbers[i]);
    }
  }

  //
  const output = (document.querySelector(
    "#output"
  ).innerHTML = `Hai indovinato i seguenti numeri: <strong>${guessNumbers.join(
    ", "
  )}</strong>`);
}
