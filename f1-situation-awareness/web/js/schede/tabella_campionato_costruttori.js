/**
 * Componente Vue generico per renderizzare una tabella.
 * @prop {Array} colonne - Array di oggetti. Formato: { chiave: 'idCampo', etichetta: 'Titolo Colonna' }
 * @prop {Array} dati - Array di oggetti contenenti i dati da mostrare nelle righe.
 */
Vue.component('tabella-generica', {
    props: {
        colonne: {
            type: Array,
            required: true
        },
        dati: {
            type: Array,
            required: true
        }
    },
    template: `
        <div class="w3-responsive">
            <table class="w3-table-all w3-hoverable">
                <thead>
                    <tr class="w3-dark-grey">
                        <th v-for="(colonna, indice) in colonne" :key="indice" class="w3-center">
                            {{ colonna.etichetta }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="dati.length === 0">
                        <td :colspan="colonne.length" class="w3-center w3-padding-16">
                            Nessun dato disponibile.
                        </td>
                    </tr>
                    <tr v-for="(riga, indiceRiga) in dati" :key="indiceRiga">
                        <td v-for="(colonna, indiceCol) in colonne" :key="indiceCol" class="w3-center">
                            {{ riga[colonna.chiave] }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
});