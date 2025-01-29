import { pescaCarte } from "./utility.js";

export function metodoCelticaSemplice() {
    const carteEstratte = pescaCarte(8);
    const risultati = [
        `Influenze passate-->    ${carteEstratte[0].Titolo}`,
        `Influenze attuali-->    ${carteEstratte[1].Titolo}`,
        `Influenze future-->    ${carteEstratte[2].Titolo}`,
        `Influenze esterne-->    ${carteEstratte[3].Titolo}`,
        `Influenze interne-->    ${carteEstratte[4].Titolo}`,
        `Fondo mazzo 1-->    ${carteEstratte[5].Titolo}`,
        `Fondo mazzo 2-->    ${carteEstratte[6].Titolo}`,
        `Fondo mazzo 3-->    ${carteEstratte[7].Titolo}`
    ];

    const risultatiDiv = document.getElementById("risultati");
    risultatiDiv.innerHTML = ""; // Pulisce eventuali risultati precedenti

    // Aggiungi la scritta "Risultati" sopra le carte
    const titolo = document.createElement("h2");
    titolo.textContent = "Risultati";
    risultatiDiv.appendChild(titolo);

    // Mostra le carte una alla volta con un effetto graduale
    risultati.forEach((risultato, index) => {
        setTimeout(() => {
            const cartaDiv = document.createElement("div");
            cartaDiv.innerHTML = risultato;
            cartaDiv.classList.add("carta");
            cartaDiv.style.opacity = "0"; // Inizialmente invisibile
            risultatiDiv.appendChild(cartaDiv);

            // Effetto fade-in graduale per la carta
            setTimeout(() => {
                cartaDiv.style.transition = "opacity 1s";
                cartaDiv.style.opacity = "1";
            }, 50);
        }, index * 1000); // Ogni carta compare dopo 1 secondo dalla precedente
    });
}
