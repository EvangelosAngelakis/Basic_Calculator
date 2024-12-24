const operationSelect = document.getElementById("operation");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const executeButton = document.getElementById("execute");
const resultDisplay = document.getElementById("result");

executeButton.addEventListener("click", () => {

    const operation = operationSelect.value;
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);


    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Please enter valid numbers.";
        return;
    }

    let result;


    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                result = "Error: Division by zero.";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operation.";
    }


    resultDisplay.textContent = ` ${result}`;
});

function pageReset(){
    location.reload()
};