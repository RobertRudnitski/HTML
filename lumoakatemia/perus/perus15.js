const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const calculate = () => {
    rl.question("1. Add 2. Subtract 3. Multiply 4. Divide 5. Exit\n", op => {
        if (op === '5') {
            rl.close();
            return;
        }

        if (op >= 1 && op <= 4) {
            rl.question("Enter first number: ", num1 => rl.question("Enter second number: ", num2 => {
                [num1, num2] = [+num1, +num2];
                const result = (op === '1' ? num1 + num2 : op === '2' ? num1 - num2 : op === '3' ? num1 * num2 : num2 !== 0 ? num1 / num2 : "Cannot divide by zero");
                console.log(`${num1} ${op === '1' ? '+' : op === '2' ? '-' : op === '3' ? '*' : '/'} ${num2} = ${result}`);
                calculate();
            }));
        } else {
            console.log("Invalid input. Please enter a valid option.");
            calculate();
        }
    });
};

calculate();
