
// Variabler

let filmvalg, antall, fornavn, etternavn, telefonnr, epost;

// Legger til verdier for variablene

function leggTilFilm(svar) {
    filmvalg = svar;
}

function leggTilBillett(svar) {
    antall = parseInt(svar);
}

function leggTilFornavn(svar) {
    fornavn = svar.trim(); // Fjerner hvit mellomrom
}

function leggTilEtternavn(svar) {
    etternavn = svar.trim(); // Fjerner hvit mellomrom
}

function leggTilTelefonnr(svar) {
    telefonnr = svar.trim(); // Fjerner hvit mellomrom
}

function leggTilEpost(svar) {
    epost = svar.trim(); // Fjerner hvit mellomrom
}

// Funksjon for å sjekke om feltene er tomme eller ikke.
// Skriv ut feilmeldinger hvis de er tomme.

function kjopBillett() {

    let feil = 0;

    if (filmvalg === undefined) { // Feilmelding for filmvalg
        document.getElementById("feilmelding-filmvalg").innerText = "Må velge en film";
        feil++;
    } else {
        document.getElementById("feilmelding-filmvalg").innerText = "";
    }

    if (antall === undefined || antall.isNaN) { // Feilmelding for antall billetter
        document.getElementById("feilmelding-antall").innerText = "Må skrive noe inn i antall";
        feil++;
    } else {
        document.getElementById("feilmelding-antall").innerText = "";
    }

    if (fornavn === undefined) { // Feilmelding for fornavn
        document.getElementById("feilmelding-fornavn").innerText = "Må skrive noe inn i fornavnet";
        feil++;
    } else {
        document.getElementById("feilmelding-fornavn").innerText = "";
    }

    if (etternavn === undefined) { // Feilmelding for etternavn
        document.getElementById("feilmelding-etternavn").innerText = "Må skrive noe inn i etternavnet";
        feil++;
    } else {
        document.getElementById("feilmelding-etternavn").innerText = "";
    }

    if (telefonnr === undefined || telefonnr.isNaN) { // Feilmelding for telefonnummer
        document.getElementById("feilmelding-telefonnr").innerText = "Må skrive noe inn i telefonnr";
        feil++;
    } else {
        document.getElementById("feilmelding-telefonnr").innerText = "";
    }

    if (epost === undefined) { // Feilmelding for epost
        document.getElementById("feilmelding-epost").innerText = "Må skrive noe inn i e-post";
        feil++;
    } else {
        document.getElementById("feilmelding-epost").innerText = "";
    }

    // Hvis det finner en feil, så returnerer det hva som er feil og registerer ikke noe billettkjøp.

    if (feil > 0) {
        return;
    }

    // Lagrer billett-objektet i server og henter dem tilbake for å printe ut.

    const billett = {
        film: filmvalg,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost
    }

    $.post("/lagre", billett, function () {
        hentAlle();
    })

    // Blanker ut input-feltene

    document.getElementById("inp_filmvalg").value = "";
    document.getElementById("inp_antall").value = "";
    document.getElementById("inp_fornavn").value = "";
    document.getElementById("inp_etternavn").value = "";
    document.getElementById("inp_telefonnr").value = "";
    document.getElementById("inp_epost").value = "";

    // Tømme verdier for variablene etter at den ble registrert

    filmvalg = undefined;
    antall = undefined;
    fornavn = undefined;
    etternavn = undefined;
    telefonnr = undefined;
    epost = undefined;

}

// Henter ut billettene

function hentAlle() {
    $.get("/hentAlle", function(data) {
        formaterData(data);
    });
}

// Skriver ut alle billetter (en kunde per rad)

function formaterData(billetter) {

    let billettTekst = "";
    for (let billett of billetter) {
        billettTekst += "-------------------------<br>" +
            "<b> Film: </b>" + billett.film + "<br>" +
            "<b> Antall: </b>" + billett.antall + "<br>" +
            "<b> Navn: </b>" + billett.fornavn + " " + billett.etternavn + "<br>" +
            "<b> Telefonnr: </b>" + billett.telefonnr + "<br>" +
            "<b> Epost: </b>" + billett.epost + "<br>";
    }
    $("#VisBilletter").html(billettTekst);
}

// Tømme array

function slettBilletter() {
    $.get("/slettAlle", function() {
        hentAlle();
    });
}