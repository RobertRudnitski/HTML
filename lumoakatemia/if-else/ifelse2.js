const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Anna ensimainen luku: ", (a) => {
    rl.question("Anna toinen luku: ", (b) => {
        rl.question("Anna kolmas luku: ", (c) => {
            a = parseFloat(a);
            b = parseFloat(b);
            c = parseFloat(c);
            if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
                let vastaus;

                if (a > b && a > c) {
                    vastaus = a;
                } else if (b > a && b > c) {
                    vastaus = b;
                }
                 else if (c > a && c > b) {
                vastaus = c;
                 }
                else {
                    console.log("luvut ovat yhtasuuria.");
                    rl.close();
                    return;
                }

                console.log("Isompi luku on : " + vastaus);
            } else {
                console.log("error. anna lukuja.");
            }

            rl.close();
        });
    }
)});