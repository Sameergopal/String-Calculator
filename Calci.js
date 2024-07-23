function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const delimiterLineEnd = numbers.indexOf("\n");
        delimiter = new RegExp(numbers.substring(2, delimiterLineEnd));
        numbers = numbers.substring(delimiterLineEnd + 1);
    }

   
    const tokens = numbers.split(delimiter);
    
    let sum = 0;

    tokens.forEach(token => {
        const num = parseFloat(token);
        if (!isNaN(num)) {
            sum += num;
        }
    });

    return sum;
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

function appendNumber(number) {
    const inputStringElement = document.getElementById("inputString");
    inputStringElement.value += number;
}

function clearDisplay() {
    document.getElementById("inputString").value = '';
    document.getElementById("result").textContent = 'Result: 0';
}
