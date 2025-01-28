// Importa i dati dal file descrizione_stese.js
import { descrizioneStese } from "../descrizioni/descrizione_stese.js";

document.addEventListener("DOMContentLoaded", () => {
    const dropdownMenu = document.getElementById("dropdownMenu_stese");
    const submitButton = document.getElementById("submitButton");

    // Popola il menu a tendina con i dati
    descrizioneStese.forEach(stesa => {
        const option = document.createElement("option");
        option.value = stesa.Funzione; // La funzione da eseguire
        option.textContent = `${stesa.Identificativo}. ${stesa.Titolo}`; // Testo visibile
        dropdownMenu.appendChild(option);
    });

    // Assegna un evento al pulsante per eseguire la funzione selezionata
    submitButton.addEventListener("click", () => {
        const selectedFunction = dropdownMenu.value;
        if (selectedFunction) {
            eval(selectedFunction); // Esegue la funzione selezionata
        } else {
            alert("Seleziona una stesa dal menu a tendina.");
        }
    });
});
