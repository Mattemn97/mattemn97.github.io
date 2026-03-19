// js/main.js

new Vue({
    el: '#app',
    data: {
        annoSelezionato: 2024,
        anniDisponibili: [],
        granPremiDisponibili: [],
        granPremioSelezionato: null,
        schedaAttiva: 'classifiche' // Scheda di default all'apertura
    },
    created() {
        // Popola l'elenco degli anni all'avvio
        this.anniDisponibili = recuperaAnniDisponibili();
        // Carica i Gran Premi per l'anno di default
        this.caricaGranPremi();
    },
    watch: {
        // Osserva i cambiamenti sull'anno selezionato per aggiornare i Gran Premi
        annoSelezionato: function() {
            this.caricaGranPremi();
            this.granPremioSelezionato = null; // Reset Gran Premio selezionato
        }
    },
    methods: {
        /**
         * Carica i Gran Premi per l'anno selezionato.
         */
        caricaGranPremi() {
            // Chiama la funzione API (asincrona in realtà)
            this.granPremiDisponibili = recuperaGranPremiPerAnno(this.annoSelezionato);
        },

        /**
         * Imposta la scheda attiva.
         *
         * @param {string} nomeScheda - Il nome della scheda da aprire.
         */
        apriScheda(nomeScheda) {
            this.schedaAttiva = nomeScheda;
        },

        /**
         * Verifica se una specifica sessione è presente nel Gran Premio selezionato.
         * (Verrà implementata successivamente con la logica corretta, per ora restituisce sempre true).
         *
         * @param {string} sessione - Il codice della sessione da verificare (es. 'libere1').
         * @returns {boolean} - True se la sessione è presente, altrimenti False.
         */
        sessioneEsistente(sessione) {
            // Dati segnaposto: per ora assumiamo che tutte le sessioni esistano
            return true;
        }
    }
});