function onkokirjain(merkki) {
    if (merkki.match(/^[a-zA-Z]+$/i)) {
        console.log("on merkki")
    }
    else {
        console.log("ei ole")
    }
}
onkokirjain("g")
onkokirjain("1")