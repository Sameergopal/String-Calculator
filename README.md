# String Calculator

A simple string calculator that performs addition and subtraction on a string of comma-separated numbers. This project demonstrates basic string manipulation and arithmetic operations in JavaScript.

## Features

- **Addition and Subtraction**: The calculator can handle positive and negative numbers. Positive numbers are added, and negative numbers are subtracted.
- **Custom Delimiters**: Supports custom delimiters specified at the beginning of the string.
- **Multiple Numbers**: Handles an arbitrary number of numbers in the input string.
- **Newline as Delimiter**: Can handle newline characters as delimiters between numbers.

## How to Use

1. **Enter Numbers**: Enter a string of comma-separated numbers in the input field.
2. **Calculate**: Click the `=` button to calculate the result.
3. **Clear**: Click the `C` button to clear the input field and result.

## Examples

- **Input**: `""` 
  - **Output**: `0`
- **Input**: `"1"`
  - **Output**: `1`
- **Input**: `"1,5"`
  - **Output**: `6`
- **Input**: `"1,-2,-3,4"`
  - **Output**: `0`
- **Input with custom delimiter**: `"//;\n1;2"`
  - **Output**: `3`
- **Input with newlines**: `"1\n2,3"`
  - **Output**: `6`

## Project Structure

- **index.html**: The main HTML file that includes the calculator's structure and input field.
- **Calci.css**: The CSS file that styles the calculator.
- **Calci.js**: The JavaScript file containing the logic for the string calculator.

## Installation

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/your-username/string-calculator.git
