// Importa il mazzo dal file 'mazzo_tarocchi.js'
import { carteTarocchi } from "./descrizioni/mazzo_tarocchi.js";

/**
 * Funzione per pescare carte casuali dal mazzo dei tarocchi.
 * @param {number} numCarte - Numero di carte da pescare.
 * @returns {Array} Lista di carte pescate con significato casuale.
 */
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