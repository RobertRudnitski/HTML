const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Anna ensimainen luku: ", (a) => {
    rl.question("Anna toinen luku: ", (b) => {
        a = parseFloat(a);
        b = parseFloat(b);

        if (!isNaN(a) && !isNaN(b)) {
            let vastaus;

            if (a > b) {
                vastaus = a;
            } else if (b > a) {
                vastaus = b;
            } else {
                console.log("molemmat luvut ovat yhtäsuuria.");
                rl.close();
                return;
            }

            console.log("Isompi luku on : " + vastaus);
        } else {
            console.log("error. anna lukuja.");
        }

        rl.close();
    });
});
