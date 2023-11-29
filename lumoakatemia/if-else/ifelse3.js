const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Anna luku: ", (a) => {
        a = parseFloat(a);

        if (!isNaN(a)) {
            let vastaus;

            if (a > 0) {
              vastaus = ("luku on positiivinen") ;
            } else if (a == 0) {
              vastaus = ("luku on nolla");
            } else {
                console.log("luku on negatiivinen");
                rl.close();
                return;
            }

            console.log(vastaus);
        } else {
            console.log("error. anna lukuja.");
        }

        rl.close();
    
});
