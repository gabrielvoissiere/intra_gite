const identifiantAdmin = "1";
const mdpAdmin = "1";

const valider = document.getElementById("valider");

function removeanim() {
    document.getElementById("identifiant").classList.remove("novalid");
    document.getElementById("mdp").classList.remove("novalid");
};

valider.addEventListener("click", function (event) {
    console.log('cliquer')

    let identifiant = document.getElementById("identifiant").value;
    let mdp = document.getElementById("mdp").value;
    let erreur = document.getElementById("erreur");
    let test = "";

    console.log(identifiant);
    console.log(mdp);

    if (identifiant == "" || mdp == "") {
        erreur.innerHTML = "Veuillez remplir tous les champs"
    } else if (identifiant !== identifiantAdmin || mdp !== mdpAdmin) {
        document.getElementById("identifiant").classList.add("erreur", "novalid");
        document.getElementById("mdp").classList.add("erreur", "novalid");
        erreur.innerHTML = "Mot de passe ou identifiant incorrecte";

        setTimeout(function () {
            document.getElementById("identifiant").classList.remove("novalid");
            document.getElementById("mdp").classList.remove("novalid");
        }, 500);
    } else {
        document.location.href = "pages/menu.html";
    }
});







