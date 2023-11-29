const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Anna luku: ", (a) => {
    a = parseFloat(a);

    if (!isNaN(a)) {
        let vastaus;

        if (a % 5 == 0 && a % 11 == 0) {
            vastaus = ("luvun voi jakaa numerolla 5 ja 11:sta");
        } else if (a % 5 == 0 || a % 11 == 0) {
            vastaus = ("luvun voi jakaa numerolla 5 tai 11:sta");
        } else {
     console.log("ei pysty laskemaan");
      rl.close();
     return;
        }
        console.log(vastaus);
    } else {
        console.log("error. anna lukuja.");
    }

    rl.close();

});