let date = new Date();
let jour = date.getDate();
let annee = date.getFullYear();
const monthNames = ["01", "02", "03", "04", "05", "06",
  "07", "08", "09", "10", "11", "12"
];

console.log(jour + "/" + monthNames[date.getMonth()] + "/" + annee);

document.getElementById("dateresaresult").innerHTML = (jour + "/" + monthNames[date.getMonth()] + "/" + annee);

// affiche dans le content
function affichage() {

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let adresse = document.getElementById("adresse").value;
    let codePostal = document.getElementById("codepostal").value;
    let commune = document.getElementById("commune").value;
    let telephone = document.getElementById("tel").value;
    let email = document.getElementById("mail").value;
    let nbPersonne = document.getElementById("nbpersonne").value;
    let nbAnimaux = document.getElementById("animaux").value;
    let dateReservation = document.getElementById("dateresa").value;
    let dateArriver = document.getElementById("datedebut").value;
    let dateDepart = document.getElementById("datefin").value;
    let commentaire = document.getElementById("commentaire").value;
    
    // tableau d'info
    let outputArray = [
        nom,
        prenom,
        adresse,
        codePostal,
        commune,
        telephone,
        email,
        nbPersonne,
        nbAnimaux,
        dateReservation,
        dateArriver,
        dateDepart,
        commentaire
    ]

    // console.log(outputArray);

    // initialisation des variables de sortie
    let nomResult = document.getElementById("nomresult");
    let prenomResult = document.getElementById("prenomresult");
    let adresseResult = document.getElementById("adresseresult");
    let codeResult = document.getElementById("codepostalresult");
    let comResult = document.getElementById("communeresult");
    let telResult = document.getElementById("telresult");
    let mailResult = document.getElementById("mailresult");
    let nbpersResult = document.getElementById("nbpersonneresult");
    let nbanimResult = document.getElementById("animauxresult");
    let dateresResult = document.getElementById("dateresaresult");
    let datearrResult = document.getElementById("datedebutresult");
    let dateResult = document.getElementById("datefinresult");
    let comentResult = document.getElementById("comresult");

    // association
    nomResult.innerHTML = outputArray[0];
    prenomResult.innerHTML = outputArray[1];
    adresseResult.innerHTML = outputArray[2];
    codeResult.innerHTML = outputArray[3];
    comResult.innerHTML = outputArray[4];
    telResult.innerHTML = outputArray[5];
    mailResult.innerHTML = outputArray[6];
    nbpersResult.innerHTML = outputArray[7];
    nbanimResult.innerHTML = outputArray[8];
    dateresResult.innerHTML = outputArray[9].split("-").reverse().join('/');
    datearrResult.innerHTML = outputArray[10].split("-").reverse().join('/');
    dateResult.innerHTML = outputArray[11].split("-").reverse().join('/');
    comentResult.innerHTML = outputArray[12];
};

// html en pdf
const doc = new jspdf.jsPDF();

function myPdf() {

    // initialisation des variables du formulaire
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let adresse = document.getElementById("adresse").value;
    let codePostal = document.getElementById("codepostal").value;
    let commune = document.getElementById("commune").value;
    let telephone = document.getElementById("tel").value;
    let email = document.getElementById("mail").value;
    let nbPersonne = document.getElementById("nbpersonne").value;
    let nbAnimaux = document.getElementById("animaux").value;
    let dateReservation = document.getElementById("dateresa").value;
    let dateArriver = document.getElementById("datedebut").value;
    let dateDepart = document.getElementById("datefin").value;
    let commentaire = document.getElementById("commentaire").value;

    // tableau qui contient les infos
    let infoArray = [
        "Feuille de reservation de" + " " + nom + " " + prenom, " ",
        "Nom :" + " " + nom, " ",
        "Prénom :" + " " + prenom, " ",
        "Adresse :" + " " + adresse, " ",
        "Code postal :" + " " + codePostal, " ",
        "commune :" + " " + commune, " ",
        "Telephone :" + " " + telephone, " ",
        "Email :" + " " + email, " ",
        "Nombre de personne :" + " " + nbPersonne, " ",
        "Nombre d'animaux :" + " " + nbAnimaux, " ",
        "Date de la réservation :" + " " + dateReservation, " ",
        "Date d'arriver :" + " " + dateArriver, " ",
        "Date de départ :" + " " + dateDepart, " ",
        "Commentaire :" + " " + commentaire, " "
    ];

    // console.log(infoArray);

    // enregistrement en pdf
    doc.text(infoArray, 10, 10);
    doc.save("Reservation.pdf");
}

// bouton d'aperçu
let apercu = document.getElementById("apercu");
apercu.addEventListener("click", function() {
    affichage(); // appel de la fonction affichage
});

// bouton de telechargement
let bouton = document.getElementById("download");
bouton.addEventListener("click", function() {
    myPdf(); //appel de la fonction myPDF
});

// bouton retour
let retour = document.getElementById("retour");
retour.addEventListener("click", function() {
    document.location.href="../pages/menu.html";
});

