function Kirjain(Merkki) {
    if (/[aeiouyäö]/i.test(Merkki)) {
        console.log("kirjain on vokaali");

    } else if (/[bcdfghjklmnpqrstvwxz]/i.test(Merkki)) {
        console.log("kirjain on konsonantti");

    } else {
        console.log("Annettu merkki ei ole kumpikaan");
    }
}

Kirjain("b");
Kirjain("a")
Kirjain("8")
