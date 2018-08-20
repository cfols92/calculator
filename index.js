const btn = document.querySelectorAll('button');

let btnArray = Array.from(btn);

let decimalClicked = false;

let equalClicked = "";

let display = document.querySelector('#currentDisplay');

let previousDisplay = document.querySelector('#previousDisplay');

previousDisplay.textContent = "";

display.textContent = "";

let storedNumbers = [];

let operationClicked = false;

let operationValue = "";

let clear = function(){
    display.textContent = "";
    previousDisplay.textContent = "";
    storedNumbers = [];
}

let divide = function (){
    if (display.textContent == "" || display.textContent == "Please enter a number.") {
        display.textContent = "Please enter a number."
        operationClicked = true;
    } else {
        operationClicked = true;
        storedNumbers.push(parseInt(display.textContent));
        if (equalClicked == true) {
            previousDisplay.textContent = storedNumbers[0] + " / ";
            equalClicked = false;
        } else {
            previousDisplay.textContent += " / ";
        }
        console.log(storedNumbers);
        operationValue = 3;
    }
}

let seven = function (){
    if (operationClicked == true) {
        display.textContent = ""
        display.textContent += 7;
        operationClicked = false;
    } else {
        display.textContent += 7;
    }

    previousDisplay.textContent += 7;

    console.log(storedNumbers);
}

let eight = function (){
    if (operationClicked == true) {
        display.textContent = ""
        display.textContent += 8;
        operationClicked = false;
    } else {
        display.textContent += 8;
    }

    previousDisplay.textContent += 8;
    console.log(storedNumbers);
}

let nine = function (){
    if (operationClicked == true) {
        display.textContent = ""
        display.textContent += 9;
        operationClicked = false;
    } else {
        display.textContent += 9;
    }

    previousDisplay.textContent += 9;
    console.log(storedNumbers);
}

let multiply = function (){


    if (display.textContent == "" || display.textContent == "Please enter a number.") {
        display.textContent = "Please enter a number."
        operationClicked = true;
    } else {
        operationClicked = true;
        storedNumbers.push(parseInt(display.textContent));
        if (equalClicked == true) {
            previousDisplay.textContent = storedNumbers[0] + " * ";
            equalClicked = false;
        } else {
            previousDisplay.textContent += " * ";
        }
        console.log(storedNumbers);
        operationValue = 2;
    }
}

let four = function (){
    if (operationClicked == true) {
        display.textContent = ""
        display.textContent += 4;
        operationClicked = false;
    } else {
        display.textContent += 4;
    }

    previousDisplay.textContent += 4;
    console.log(storedNumbers);
}

let five = function (){
    if (operationClicked == true) {
        display.textContent = ""
        display.textContent += 5;
        operationClicked = false;
    } else {
        display.textContent += 5;
    }

    previousDisplay.textContent += 5;
    console.log(storedNumbers);
}

let six = function (){
    if (operationClicked == true) {
        display.textContent = ""
        display.textContent += 6;
        operationClicked = false;
    } else {
        display.textContent += 6;
    }

    previousDisplay.textContent += 6;
    console.log(storedNumbers);
}

let minus = function (){
    if (display.textContent == "" || display.textContent == "Please enter a number.") {
        display.textContent = "Please enter a number."
        operationClicked = true;
    } else {
        operationClicked = true;
        storedNumbers.push(parseInt(display.textContent));
        if (equalClicked == true) {
            previousDisplay.textContent = storedNumbers[0] + " - ";
            equalClicked = false;
        } else {
            previousDisplay.textContent += " - ";
        }
        console.log(storedNumbers);
        operationValue = 1;
    }
}

let one = function (){
    if (operationClicked == true) {
        display.textContent = ""
        display.textContent += 1;
        operationClicked = false;
    } else {
        display.textContent += 1;
    }

    previousDisplay.textContent += 1;
    console.log(storedNumbers);
}

let two = function (){
    if (operationClicked == true) {
        display.textContent = ""
        display.textContent += 2;
        operationClicked = false;
    } else {
        display.textContent += 2;
    }

    previousDisplay.textContent += 2;
    console.log(storedNumbers);
}

let three = function (){
    if (operationClicked == true) {
        display.textContent = ""
        display.textContent += 3;
        operationClicked = false;
    } else {
        display.textContent += 3;
    }

    previousDisplay.textContent += 3;
    console.log(storedNumbers);
}

let plus = function (){
    if (display.textContent == "" || display.textContent == "Please enter a number.") {
        display.textContent = "Please enter a number."
        operationClicked = true;
    } else {
        operationClicked = true;
        storedNumbers.push(parseInt(display.textContent));

        if (equalClicked == true) {
            previousDisplay.textContent = storedNumbers[0] + " + ";
            equalClicked = false;
        } else {
            previousDisplay.textContent += " + ";
        }
        console.log(storedNumbers);
        operationValue = 0;
    }
}

let plusMinus = function (){
    if (display.textContent == "" || display.textContent == "Please enter a number.") {
        display.textContent = "Please enter a number."
        operationClicked = true;
    } else {
        let answer = (display.textContent)*(-1);
        display.textContent = answer;
    }
}

let zero = function (){
    if (operationClicked == true) {
        display.textContent = ""
        display.textContent += 0;
        operationClicked = false;
    } else {
        display.textContent += 0;
    }

    previousDisplay.textContent += 0;
    console.log(storedNumbers);
}

let decimal = function(){
    if (display.textContent == "" || display.textContent == "Please enter a number.") {
        display.textContent = "0.";
    } else {
        display.textContent += ".";
    }
}

let equals = function(){

    operate();
}

let arrayOfFunctions = [
    clear,
    divide,
    seven,
    eight,
    nine,
    multiply,
    four,
    five,
    six,
    minus,
    one,
    two,
    three,
    plus,
    plusMinus,
    zero,
    decimal,
    equals
]

for (let i=0; i < 18; i++) {
    btnArray[i].addEventListener('click', () => {
        arrayOfFunctions[i]();
    });
    btnArray[i].classList.add('class'+[i]);
}

//"display" is the h1 element in the HTML file

let updateCurrentDisplay = function() {
    display.textContent += display.textContent;
}

let operate = function() {
    if (display.textContent == "" || display.textContent == "Please enter a number.") {
        display.textContent = "Please enter a number."
        operationClicked = true;
    } else {
        storedNumbers.push(parseInt(display.textContent))
        let answer = eval(previousDisplay.textContent);
        display.textContent = answer;
        previousDisplay.textContent += " = ";
        storedNumbers = [];
        console.log(answer);
        console.log(storedNumbers);
        equalClicked = true;
        operationValue = "";
    }
}