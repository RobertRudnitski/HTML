function Kirjain(Merkki) {
    if (/[a-�A-�]/i.test(Merkki)) {
        console.log("merkki on kirjain");

    } else if (/[0-9]/i.test(Merkki)) {
        console.log("merkki on numero");

    } else {
        console.log("Annettu merkki on erikoismerkki");
    }
}

Kirjain("b");
Kirjain("!")
Kirjain("8")
