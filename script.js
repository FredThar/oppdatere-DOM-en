const tekstboks = document.getElementById("tekstboks");
const leggTilKnapp = document.getElementById("leggTilKnapp");
const tekstContainer = document.getElementById("tekstContainer");

leggTilKnapp.addEventListener("click", function () {
    // Hent teksten fra tekstboksen
    const tekst = tekstboks.value;

    // Sjekk at tekstboksen ikke er tom
    if (tekst.trim() === "") {
        return;
    }

    // Lag et nytt avsnitt
    const avsnitt = document.createElement("p");

    // Legg teksten inn i avsnittet
    avsnitt.textContent = tekst;

    // Når brukeren klikker på avsnittet, fjernes det
    avsnitt.addEventListener("click", function () {
        avsnitt.remove();
    });

    // Legg avsnittet til på nettsiden
    tekstContainer.appendChild(avsnitt);

    // Tøm tekstboksen etter at teksten er lagt til
    tekstboks.value = "";
});