let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector(".screen");

function buttonClick(value) {
  if (isNan(value)) {
    //This is not a number
    handleSymbol(value);
  } else {
    //This is a number
    handleNumber(value);
  }
  screen.innerText = buffer;
}

function handleSymbol(symbol) {
  if (symbol === "C") {
    buffer = "0";
    runningTotal = 0;
  }
}

function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}
