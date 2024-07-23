function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const delimiterLineEnd = numbers.indexOf("\n");
        delimiter = new RegExp(numbers.substring(2, delimiterLineEnd));
        numbers = numbers.substring(delimiterLineEnd + 1);
    }

    // Replace delimiters with commas and split into tokens
    numbers = numbers.replace(delimiter, ',');
    const tokens = numbers.split(',');

    let sum = 0;
    const negativeNumbers = [];

    tokens.forEach(token => {
        const num = parseInt(token, 10);
        if (!isNaN(num)) {
            if (num < 0) {
                negativeNumbers.push(num);
            } else {
                sum += num;
            }
        }
    });

    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }

    return sum;
}

function appendNumber(number) {
    const inputString = document.getElementById("inputString");
    inputString.value += number;
}

function clearDisplay() {
    document.getElementById("inputString").value = "";
    document.getElementById("result").textContent = "Result: 0";
}

function calculate() {
    const inputString = document.getElementById("inputString").value;
    const resultDiv = document.getElementById("result");
    try {
        const result = add(inputString);
        resultDiv.textContent = `Result: ${result}`;
    } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
    }
}
