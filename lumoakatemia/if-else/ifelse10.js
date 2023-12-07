function Kirjain(Merkki) {
    if (Merkki == Merkki.toUpperCase()) {
        console.log("Annettu kirjain on iso");
    }
    else if (Merkki == Merkki.toLowerCase()) {
        console.log("Annettu kirjain on pieni");
    }
     else if (!isNaN(Merkki)) {
    console.log("Annettu merkki on numero");
     }
    else  {
        console.log("Annettu merkki ei ole kirjain");
     }
}

Kirjain('A');
Kirjain('b');
Kirjain('9');
