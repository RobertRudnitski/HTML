console.log("teht 11")
var Tuuma, Sentit;
Sentit = 74
Tuuma  = Sentit / 2.54;
console.log('74 Senttia on ' + Tuuma + ' Tuumaa')
console.log("--------------------")

console.log("teht 12")
function yardiaToMetri(yards) {
    const metri = yards * 0.9144;
    return metri;
}

let yardsValue = 74; 
let metriResult = yardiaToMetri(yardsValue);

console.log(`${yardsValue} yardia is on ${metriResult} metria.`);
console.log("--------------------")

console.log("teht 13")
function MetriToYardi(Metri) {
    const Yards = Metri / 0.9144;
    return Yards;
}

let MetriValue = 74;
let YardResult = MetriToYardi(MetriValue);

console.log(`${MetriValue} yardia is on ${YardResult} metria.`);
console.log("--------------------")


console.log("teht 14")
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("anna numeron ja vaihdan sen farenhaitista celsiuksin: ", function (input) {
    const fah = parseFloat(input);
    if (!isNaN(fah)) {
        const cel = ((fah - 32) * 5) / 9;
        console.log(cel + '  celsiusta');
    } else {

        console.log("Get help from professional.");
    }

    rl.close();
    console.log("--------------------")
});

