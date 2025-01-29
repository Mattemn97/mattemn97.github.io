// Importa i dati del file descrizione_stese.js
import { descrizioneStese } from "./descrizioni/descrizione_stese.js";

// Mappa che associa il nome del file a un import dinamico
const metodiMapping = {
    "descrizione_metodi_giornaliere.js": "./descrizioni/descrizione_metodi_giornaliere.js",
    "descrizione_metodi_settimanale.js": "./descrizioni/descrizione_metodi_settimanale.js",
    "descrizione_metodi_mensile.js": "./descrizioni/descrizione_metodi_mensile.js",
    "descrizione_metodi_annuale.js": "./descrizioni/descrizione_metodi_annuale.js",
    "descrizione_metodi_futuro.js": "./descrizioni/descrizione_metodi_futuro.js",
};

import { metodoCelticaSemplice } from "./metodi_futuro.js";
import { metodoCelticaCompleta } from "./metodi_futuro.js";
import { metodoCartaSingola } from "./metodi_futuro.js";

document.addEventListener("DOMContentLoaded", () => {
    const dropdownStese = document.getElementById("dropdownStese");
    const dropdownMetodi = document.getElementById("dropdownMetodi");
    const submitButton = document.getElementById("submitButton");

    // Popola il primo menu a tendina con i dati delle stese
    descrizioneStese.forEach(stesa => {
        const option = document.createElement("option");
        option.value = stesa.Funzione; // Nome del file che contiene i metodi
        option.textContent = `${stesa.Identificativo}. ${stesa.Titolo}`;
        dropdownStese.appendChild(option);
    });

    // Evento per aggiornare il menu metodi in base alla stesa selezionata
    dropdownStese.addEventListener("change", async () => {
        const selectedFile = dropdownStese.value;

        // Resetta il menu metodi
        dropdownMetodi.innerHTML = '<option value="">Seleziona un metodo</option>';
        dropdownMetodi.disabled = true;
        submitButton.disabled = true;

        // Seleziona un file valido
        if (selectedFile && metodiMapping[selectedFile]) {
            try {
                // Importa dinamicamente il file dei metodi selezionato
                const { descrizioneMetodi } = await import(metodiMapping[selectedFile]);

                // Popola il secondo menu a tendina con i metodi disponibili
                descrizioneMetodi.forEach(metodo => {
                    const option = document.createElement("option");
                    option.value = metodo.Funzione; // Funzione associata
                    option.textContent = `${metodo.Identificativo}. ${metodo.Titolo}`;
                    dropdownMetodi.appendChild(option);
                });

                dropdownMetodi.disabled = false;
            } catch (error) {
                console.error("Errore durante il caricamento dei metodi:", error);
            }
        }
    });

    // Abilita il pulsante "Esegui" solo se è stato selezionato un metodo
    dropdownMetodi.addEventListener("change", () => {
        submitButton.disabled = dropdownMetodi.value === "";
    });

    // Evento per eseguire il metodo selezionato
    submitButton.addEventListener("click", () => {
        const selectedFunction = dropdownMetodi.value;
        if (selectedFunction) {
            eval(selectedFunction); // Esegue la funzione selezionata
        }
    });
});
