//feuille de reservation
let feuille = document.getElementById("reservation");
feuille.addEventListener("click", function() {
    document.location.href = "../pages/reservation.html"
});

//calendrier
let calendrier = document.getElementById("calendrier");
calendrier.addEventListener("click", function() {
    document.location.href = "../pages/planning.html"
});

//deconnexion
let retour = document.getElementById("retour");
let dialog = document.getElementById("dialog");
let dialog2 = document.getElementById("dialogboite");

retour.addEventListener("click", function() {
    dialog.classList.remove("fond");
    dialog2.classList.remove("fond");
});

let oui = document.getElementById("yes");
let non = document.getElementById("no");

oui.addEventListener("click", function() {
    document.location.href = "../index.html"
});

non.addEventListener("click", function() {
    dialog.classList.add("fond");
    dialog2.classList.add("fond");
});