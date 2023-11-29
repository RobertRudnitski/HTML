const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("anna sade arvo: ", function (input) {
    const sade = parseFloat(input);
    if (!isNaN(sade)) {
        const vastaus = (sade * sade * 3.14)
        console.log(vastaus)
    }
    else {
        console.log("Not Possible")
    }
    rl.close();
    console.log("---------------------")
});
