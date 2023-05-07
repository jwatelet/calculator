
const divisionByZeroErrorMessage = "DIVISION BY 0 IS IMPOSSIBLE";
const firstNumber = document.querySelector(".firstNumber");
const secondNumber = document.querySelector(".secondNumber");
const operator = document.querySelector(".operator");
const result = document.querySelector(".result");

configNumberButtons();
configOperatorButtons();

function configOperatorButtons() {
  document.getElementById("btnPlus").addEventListener('click', (_) => clickOperator("+"));
  document.getElementById("btnMinus").addEventListener('click', (_) => clickOperator("-"));
  document.getElementById("btnDivide").addEventListener('click', (_) => clickOperator("/"));
  document.getElementById("btnMultiply").addEventListener('click', (_) => clickOperator("*"));
  document.getElementById("btnEqual").addEventListener('click', (_) => clickEqual());
  document.getElementById("btnAC").addEventListener('click', (_) => resetAll());
  document.getElementById("btnC").addEventListener('click', (_) => clearLastVariable());
  document.getElementById("btnPercent").addEventListener('click', (_) => percent());
  document.getElementById("btnDecimal").addEventListener('click', (_) => decimal());
  document.getElementById("btnPlusMinus").addEventListener('click', (_) => negativePositive());
}

function configNumberButtons() {
  document.getElementById("btnZero").addEventListener('click', (_) => clickNumber(0));
  document.getElementById("btnOne").addEventListener('click', (_) => clickNumber(1));
  document.getElementById("btnTwo").addEventListener('click', (_) => clickNumber(2));
  document.getElementById("btnThree").addEventListener('click', (_) => clickNumber(3));
  document.getElementById("btnFour").addEventListener('click', (_) => clickNumber(4));
  document.getElementById("btnFive").addEventListener('click', (_) => clickNumber(5));
  document.getElementById("btnSix").addEventListener('click', (_) => clickNumber(6));
  document.getElementById("btnSeven").addEventListener('click', (_) => clickNumber(7));
  document.getElementById("btnEight").addEventListener('click', (_) => clickNumber(8));
  document.getElementById("btnNine").addEventListener('click', (_) => clickNumber(9));

  window.addEventListener('keydown', clickButton);
}

function clickButton(e) {
  e.preventDefault();
  const button = document.querySelector(`[data-key="${e.key}"]`);

  if (button) {
    button.click();
  }
}

function negativePositive() {
  // if (!operator.textContent && !firstNumber.firstNumber) {
  //   toggleMinus(firstNumber);
  // } else {
  //   toggleMinus(secondNumber);
  // }

  if (result.textContent) {

  } else if (!operator.textContent && firstNumber.textContent.length > 0 && !firstNumber.textContent.includes("-")) {
    toggleMinus(firstNumber);
  } else if (operator.textContent && secondNumber.textContent.length > 0 && !secondNumber.textContent.includes("-")) {
    toggleMinus(secondNumber);
  }
}

function toggleMinus(div) {
  if (div.textContent.includes("-")) {
    div.textContent = div.textContent.replace("-", "");
  } else {
    div.textContent = `-${div.textContent}`;
  }
}

function decimal() {
  if (result.textContent) {

  } else if (!operator.textContent && firstNumber.textContent.length > 0 && !firstNumber.textContent.includes(".")) {
    firstNumber.textContent += ".";
  } else if (operator.textContent && secondNumber.textContent.length > 0 && !secondNumber.textContent.includes(".")) {
    secondNumber.textContent += ".";
  }
}

function clickNumber(num) {
  if (firstNumber.textContent && operator.textContent && secondNumber.textContent && result.textContent) {
    resetAll();
    firstNumber.textContent = num;
  } else if (!operator.textContent) {
    firstNumber.textContent += num;
  } else if (operator.textContent) {
    secondNumber.textContent += num;
  }
}

function clickOperator(char) {
  if (result.textContent) {
    const resultContent = +result.textContent;
    firstNumber.textContent = resultContent;
    secondNumber.textContent = "";
    result.textContent = "";
    operator.textContent = char;
  } else if (firstNumber.textContent && operator.textContent && secondNumber.textContent) {
    clickEqual();
  } else if (firstNumber.textContent) {
    operator.textContent = char;
  }
}

function clickEqual() {
  if (firstNumber.textContent && operator.textContent && secondNumber.textContent) {
    const operationResult = operate(+firstNumber.textContent, +secondNumber.textContent, operator.textContent);
    result.textContent = operationResult;
  }
}

function percent() {

  if (firstNumber.textContent && !operator.textContent && !secondNumber.textContent) {

    const operateResult = operate(+firstNumber.textContent, 100, "/");

    result.textContent = operateResult;
  }

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

function clearLastVariable() {
  if (firstNumber.textContent && operator.textContent && secondNumber.textContent && result.textContent) {
    result.textContent = "";
  } else if (firstNumber.textContent && operator.textContent && secondNumber.textContent) {
    secondNumber.textContent = "";
  } else if (firstNumber.textContent && operator.textContent) {
    operator.textContent = "";
  } else if (firstNumber.textContent) {
    firstNumber.textContent = "";
  }
}

function resetAll() {
  firstNumber.textContent = "";
  operator.textContent = "";
  secondNumber.textContent = "";
  result.textContent = "";
}
