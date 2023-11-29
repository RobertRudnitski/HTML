const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function muunnaPaivatVuosiKuukausiPaivat(paivat) {
    const vuodet = Math.floor(paivat / 365);
    const jaaneetPaivat = paivat % 365;
    const kuukaudet = Math.floor(jaaneetPaivat / 30);
    const LoputPaivat = jaaneetPaivat % 30;

    return {
        vuodet: vuodet,
        kuukaudet: kuukaudet,
        paivat: LoputPaivat
    };
}

rl.question("Syota paivien maara: ", (inputPaivat) => {
    const paivat = parseInt(inputPaivat);

    if (!isNaN(paivat) && paivat >= 0) {
        const tulos = muunnaPaivatVuosiKuukausiPaivat(paivat);
        console.log(`${paivat} paivaa on suunnilleen ${tulos.vuodet} vuotta, ${tulos.kuukaudet} kuukautta ja ${tulos.paivat} paivaa.`);
    } else {
        console.log("Virheellinen syote. syota numerollinen paivamaara.");
    }

    rl.close();
});

