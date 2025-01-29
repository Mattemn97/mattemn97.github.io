// Importa il mazzo dal file 'mazzo_tarocchi.js'
import { carteTarocchi } from "./descrizioni/mazzo_tarocchi.js";

export function pescaCarte(numCarte) {
    // Controlla che il numero di carte richiesto sia valido
    if (numCarte <= 0 || numCarte > carteTarocchi.length) {
        throw new Error('Il numero di carte deve essere compreso tra 1 e il numero totale di carte nel mazzo.');
    }

    // Mescola il mazzo e pesca le carte
    const mazzoMescolato = [...carteTarocchi].sort(() => Math.random() - 0.5);
    const cartePescate = mazzoMescolato.slice(0, numCarte);

    // Aggiungi un significato casuale (Significato o SignificatoInverso) a ogni carta pescata
    const carteConSignificato = cartePescate.map(carta => {
        const campoSignificato = Math.random() > 0.5 ? 'Significato' : 'SignificatoInverso';
        return {
            Titolo: carta.Titolo,
            Numerologia: carta.Numerologia,
            Significato: carta[campoSignificato]
        };
    });

    return carteConSignificato;
}

export function visualizzaRisultati(risultati) {
    const risultatiDiv = document.getElementById("carte_estratte");
    risultatiDiv.innerHTML = "";
    risultatiDiv.style.opacity = "1";


    const titolo = document.createElement("h1");
    titolo.textContent = "Carte Estratte";
    risultatiDiv.appendChild(titolo);

    risultati.forEach((risultati, index) => {
        setTimeout(() => {
            const lettura_estrazioneDiv = document.createElement("div");
            lettura_estrazioneDiv.innerHTML = risultati.LetturaEstrazione;
            lettura_estrazioneDiv.classList.add("lettura_estrazione");
            lettura_estrazioneDiv.style.opacity = "0";

            const cartaDiv = document.createElement("div");
            cartaDiv.classList.add("carta");
            cartaDiv.style.opacity = "0";

            const primaRigaCarta_div = document.createElement("div");
            primaRigaCarta_div.classList.add("w3-card");

            const titoloCarta_div = document.createElement("div");
            titoloCarta_div.classList.add("titolo_carta");
            titoloCarta_div.classList.add("w3-threequarter");
            titoloCarta_div.innerHTML = risultati.Carta.Titolo;

            const numerologiaCarta_div = document.createElement("div");
            numerologiaCarta_div.classList.add("numerologia_carta");
            numerologiaCarta_div.classList.add("w3-quarter");
            numerologiaCarta_div.innerHTML = risultati.Carta.Numerologia;

            primaRigaCarta_div.appendChild(titoloCarta_div);
            primaRigaCarta_div.appendChild(numerologiaCarta_div);

            const significatoCarta_div = document.createElement("div");
            significatoCarta_div.classList.add("significato_carta");
            significatoCarta_div.innerHTML = risultati.Carta.Significato;
            
            cartaDiv.appendChild(primaRigaCarta_div);
            cartaDiv.appendChild(significatoCarta_div);
            
            risultatiDiv.appendChild(lettura_estrazioneDiv);
            risultatiDiv.appendChild(cartaDiv);

            setTimeout(() => {
                lettura_estrazioneDiv.style.transition = "opacity 1s";
                lettura_estrazioneDiv.style.opacity = "1";
                cartaDiv.style.transition = "opacity 1s";
                cartaDiv.style.opacity = "1";
            }, 50);
        }, index * 1000);
    });
}