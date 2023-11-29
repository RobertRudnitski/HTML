const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first number: ", (sivu1) => {
    rl.question("Enter the second number: ", (sivu2) => {
       
        sivu1 = parseFloat(sivu1);
        sivu2 = parseFloat(sivu2);


        if (!isNaN(sivu1) && !isNaN(sivu2)) {
            const vastaus = sivu1 * sivu2;
            console.log("The product is: " + vastaus);
        } else {
            console.log("Invalid input. Please enter valid numbers.");
        }

        rl.close();
    });
});