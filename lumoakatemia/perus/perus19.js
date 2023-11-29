const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("anna sivun arvo: ", function (input) {
    const sivu = parseFloat(input);
    if (!isNaN(sivu)) {
        const vastaus = (sivu * sivu)
        console.log(vastaus)
    }
    else {
        console.log("Not Possible")
    }
    rl.close();
    console.log("---------------------")
});