const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("anna ASCII arvo: ", function (input) {
    const code = parseFloat(input);
    if (!isNaN(code)) {
        const character = String.fromCharCode(code);
        console.log(character);

    } else {

        console.log("Get help from professional.");
    }
    rl.close();
    console.log("--------------------")
});