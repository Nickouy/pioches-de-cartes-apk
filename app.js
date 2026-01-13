function creerPaquet(inclureJokers) {
    const couleurs = ["Cœur", "Carreau", "Trèfle", "Pique"];
    const valeurs = ["As", "2", "3", "4", "5", "6", "7",
                     "8", "9", "10", "Valet", "Dame", "Roi"];

    let paquet = [];

    couleurs.forEach(couleur => {
        valeurs.forEach(valeur => {
            paquet.push(`${valeur} de ${couleur}`);
        });
    });

    if (inclureJokers) {
        paquet.push("Joker Rouge", "Joker Noir");
    }

    return paquet;
}

function piocher() {
    const inclureJokers = document.getElementById("jokers").checked;
    const paquet = creerPaquet(inclureJokers);
    const carte = paquet[Math.floor(Math.random() * paquet.length)];

    document.getElementById("resultat").innerText = carte;
}