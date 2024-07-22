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

    function roundNumber(num, dec) {
        return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
    }

    function operate(a , b, operation) {
        a = parseFloat(a);
        b = parseFloat(b);
        if (operation === "+") {
            return roundNumber(sum(a,b), 8);
        } else if (operation === "-") {
            return roundNumber(subtract(a,b), 8);
        } else if (operation === "/") {
            return roundNumber(divide(a,b), 8);
        } else {
            return roundNumber(multiply(a,b), 8);
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
        arrayOfNumbers.push(buttonValue);
        console.log(arrayOfNumbers);
        displayValue = "";
        display.textContent = "";
        operatorAction = buttonValue;
        console.log(operatorAction);
        console.log(arrayOfNumbers.length);
        if (arrayOfNumbers.length > 2) {
            console.log("inside the if condition")
            console.log(arrayOfNumbers);
            console.log(arrayOfNumbers[arrayOfNumbers.length - 4]);
            console.log(arrayOfNumbers[arrayOfNumbers.length - 2]);
            console.log(arrayOfNumbers[arrayOfNumbers.length - 3]);
            displayValue = operate(arrayOfNumbers[arrayOfNumbers.length - 4], arrayOfNumbers[arrayOfNumbers.length - 2], arrayOfNumbers[arrayOfNumbers.length - 3]);
            console.log(displayValue);
            // display.textContent = displayValue;
            arrayOfNumbers = [];
            console.log(arrayOfNumbers);
            arrayOfNumbers.push(displayValue);
            arrayOfNumbers.push(operatorAction);
            console.log(arrayOfNumbers);
            displayValue = "";
            console.log(displayValue);
        };
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
        console.log(arrayOfNumbers[arrayOfNumbers.length - 3]);
        console.log(operatorAction);
        displayValue = operate(arrayOfNumbers[arrayOfNumbers.length - 3], arrayOfNumbers[arrayOfNumbers.length - 1], arrayOfNumbers[arrayOfNumbers.length - 2]);
        display.textContent = displayValue;
        console.log(displayValue);
        console.log(arrayOfNumbers);
        arrayOfNumbers = [];
        console.log(arrayOfNumbers);

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