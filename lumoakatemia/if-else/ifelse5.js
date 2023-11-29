const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Anna luku: ", (a) => {
    a = parseFloat(a);

    if (!isNaN(a)) {
        let vastaus;

        if (a % 4 == 0 && a % 100 != 0) {
            vastaus = ("on karkausvuosi");
        } else if (a % 400 == 0) {
            vastaus = ("on karkausvuosi");
        } else {
            console.log("vuosi ei ole karkausvuosi");
            rl.close();
            return;
        }
        console.log(vastaus);
    } else {
        console.log("error.");
    }

    rl.close();

});