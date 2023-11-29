const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Anna luku: ", (a) => {
    a = parseFloat(a);

    if (!isNaN(a)) {
        let vastaus;

        if (a % 2 == 0) {
            vastaus = ("luku on parillinen");
        } else if ("") {
            vastaus = ("luku ei ole parillinen");
        } else {
            console.log("");
            rl.close();
            return;
        }
        console.log(vastaus);
    } else {
        console.log("error.");
    }

    rl.close();

});