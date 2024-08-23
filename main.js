const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

function appendToDisplay(value) {
  display.textContent += value;
}

function calculateButton() {
    display.textContent = eval(display.textContent);
}

function clearButton() {
  display.textContent = '';
}