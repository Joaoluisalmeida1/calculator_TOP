document.addEventListener("DOMContentLoaded", function() {

    function sum(a,b) {
        return a + b;
    };

    function subtract(a,b) {
        return a - b;
    };

    function multiply(a,b) {
        return a * b;
    };

    function divide(a,b) {
        if (b != 0) {
            return a / b;
        } else {
            return "Error - can't divide by 0"
        }
    };

    let firstNumber = 0;
    let secondNumber = 0;
    let operator = 0;
    let arrayOfNumbers = [];

    function operate(a , b, operation) {
        a = parseFloat(a);
        b = parseFloat(b);
        if (operation === "+") {
            return sum(a,b);
        } else if (operation === "-") {
            return subtract(a,b);
        } else if (operation === "/") {
            return divide(a,b);
        } else {
            return multiply(a,b);
        }
    };

    let displayValue = "";
    const display = document.querySelector(".display");
    const numberButtons = document.querySelectorAll(".buttonDisplay");
    const operatorButtons = document.querySelectorAll(".buttonOperator");
    const equalOperator = document.querySelector(".equalButton");
    let operatorAction = "";
    const clearButton = document.querySelector("#clear");

    function clickButton(event) {
        const buttonValue = event.target.textContent;
        displayValue += buttonValue;
        display.textContent = displayValue;
        console.log(buttonValue);
        console.log(displayValue);
        console.log(arrayOfNumbers);

    }

    numberButtons.forEach(button => {
        button.addEventListener("click", clickButton);
    });

    function clickOperatorButton(event) {
        const buttonValue = event.target.textContent;
        console.log(buttonValue);
        arrayOfNumbers.push(displayValue);
        console.log(arrayOfNumbers);
        displayValue = "";
        display.textContent = "";
        operatorAction = buttonValue;
        console.log(operatorAction);
        return buttonValue
    }

    operatorButtons.forEach(button => {
    button.addEventListener("click", clickOperatorButton);
    });

    function clickEqualButton(event) {
        const buttonValue = event.target.textContent;
        console.log(buttonValue);
        arrayOfNumbers.push(displayValue);
        console.log(arrayOfNumbers);
        console.log(arrayOfNumbers[arrayOfNumbers.length - 1]);
        console.log(arrayOfNumbers[arrayOfNumbers.length - 2]);
        console.log(operatorAction);
        displayValue = operate(arrayOfNumbers[arrayOfNumbers.length - 2], arrayOfNumbers[arrayOfNumbers.length - 1], operatorAction);
        display.textContent = displayValue;
        console.log(displayValue);
    }

    equalOperator.addEventListener("click", clickEqualButton);

    function clickClearButton(event) {
        const buttonValue = event.target.textContent;
        console.log(buttonValue);
        console.log("Clearing calculator's display and memory...");
        arrayOfNumbers = [];
        console.log(arrayOfNumbers)
        displayValue = [];
        console.log(displayValue);
        display.textContent = displayValue;
    }

    clearButton.addEventListener("click", clickClearButton);
});