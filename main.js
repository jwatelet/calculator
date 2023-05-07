
let numberA;
let numberB;
let selectedOperator;

const divisionByZeroErrorMessage = "DIVISION BY 0 IS IMPOSSIBLE";

configNumberButtons();
configOperatorButtons();

function configOperatorButtons() {
  document.getElementById("btnPlus").addEventListener('click', (_) => clickOperator("+"));
  document.getElementById("btnMinus").addEventListener('click', (_) => clickOperator("-"));
  document.getElementById("btnDivide").addEventListener('click', (_) => clickOperator("/"));
  document.getElementById("btnMultiply").addEventListener('click', (_) => clickOperator("*"));
  document.getElementById("btnEqual").addEventListener('click', (_) => clickEqual());
  document.getElementById("btnAC").addEventListener('click', (_) => resetAll());
  document.getElementById("btnC").addEventListener('click', (_) => removeLastChar());
  document.getElementById("btnPercent").addEventListener('click', (_) => percent());
  document.getElementById("btnDecimal").addEventListener('click', (_) => decimal());
}

function configNumberButtons() {
  document.getElementById("btnZero").addEventListener('click', (_) => appendCharToScreen(0));
  document.getElementById("btnOne").addEventListener('click', (_) => appendCharToScreen(1));
  document.getElementById("btnTwo").addEventListener('click', (_) => appendCharToScreen(2));
  document.getElementById("btnThree").addEventListener('click', (_) => appendCharToScreen(3));
  document.getElementById("btnFour").addEventListener('click', (_) => appendCharToScreen(4));
  document.getElementById("btnFive").addEventListener('click', (_) => appendCharToScreen(5));
  document.getElementById("btnSix").addEventListener('click', (_) => appendCharToScreen(6));
  document.getElementById("btnSeven").addEventListener('click', (_) => appendCharToScreen(7));
  document.getElementById("btnEight").addEventListener('click', (_) => appendCharToScreen(8));
  document.getElementById("btnNine").addEventListener('click', (_) => appendCharToScreen(9));

  window.addEventListener('keydown', clickButton);
}

function clickButton(e) {
  e.preventDefault();
  const button = document.querySelector(`[data-key="${e.key}"]`);

  if (button) {
    button.click();
  }

}

function decimal() {
  const screen = document.querySelector(".screen");

  if (!screen.textContent.includes(".")) {
    appendCharToScreen(".");
  }
}

function clickOperator(operator) {
  const screen = document.querySelector(".screen");

  numberA = +screen.textContent;
  selectedOperator = operator;


  screen.textContent = "";
}

function clickEqual() {

  const screen = document.querySelector(".screen");

  if (numberA && selectedOperator) {
    numberB = +screen.textContent
    const result = operate(numberA, numberB, selectedOperator);
    screen.textContent = result;
    numberA = result;
  }
}

function percent() {
  const screen = document.querySelector(".screen");

  numberA = +screen.textContent
  numberB = 100;
  selectedOperator = "/";

  const result = operate(numberA, numberB, selectedOperator);
  screen.textContent = result;
  numberA = result;
}

function operate(numberA, numberB, operator) {
  switch (operator) {
    case "+":
      return add(numberA, numberB);
    case "-":
      return substract(numberA, numberB);
    case "*":
      return multiply(numberA, numberB);
    case "/":
      return divide(numberA, numberB);
  }
}

function appendCharToScreen(char) {
  const screen = document.querySelector(".screen");

  if (screen.textContent.length < 20) {
    if (screen.textContent === divisionByZeroErrorMessage) {
      screen.textContent = char;
    } else {
      screen.textContent += char;
    }
  }
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {

  if (b === 0) {
    resetVariables();
    return divisionByZeroErrorMessage;
  }

  return a / b;
}

function removeLastChar() {
  const screen = document.querySelector(".screen");

  screen.textContent = screen.textContent.slice(0, -1);
}

function resetAll() {
  resetVariables();
  const screen = document.querySelector(".screen");
  screen.textContent = '';
}

function resetVariables() {
  numberA = null;
  numberB = null;
  selectedOperator = null;
}