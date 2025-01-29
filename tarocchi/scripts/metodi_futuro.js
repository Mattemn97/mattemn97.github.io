import { pescaCarte } from "./utility.js";
import { visualizzaRisultati } from "./utility.js";

export function metodoCelticaSemplice() {
    const carteEstratte = pescaCarte(8);
    const risultati = [
      {
        LetturaEstrazione: "Influenze passate",
        Carta: carteEstratte[0]
      },{
        LetturaEstrazione: "Influenze attuali",
        Carta: carteEstratte[1]
      },{
        LetturaEstrazione: "Influenze future",
        Carta: carteEstratte[2]
      },{
        LetturaEstrazione: "Influenze esterne",
        Carta: carteEstratte[3]
      },{
        LetturaEstrazione: "Influenze interne",
        Carta: carteEstratte[4]
      },{
        LetturaEstrazione: "Fondo mazzo 1",
        Carta: carteEstratte[5]
      },{
        LetturaEstrazione: "Fondo mazzo 2",
        Carta: carteEstratte[6]
      },{
        LetturaEstrazione: "Fondo mazzo 3",
        Carta: carteEstratte[7]
      }
    ];

    visualizzaRisultati(risultati);
}


export function metodoCelticaCompleta() {
    const carteEstratte = pescaCarte(10);
    const risultati = [
        `Cio' che sta accadendo    -->    ${carteEstratte[0].Titolo}`,
        `Influenze esterne    -->    ${carteEstratte[1].Titolo}`,
        `Riflessioni    -->    ${carteEstratte[2].Titolo}`,
        `Sentimenti    -->    ${carteEstratte[3].Titolo}`,
        `La vera causa    -->    ${carteEstratte[4].Titolo}`,
        `Sviluppo situazione    -->    ${carteEstratte[5].Titolo}`,
        `Cio' che si vuole ottenere    -->    ${carteEstratte[6].Titolo}`,
        `Il punto di vista degli altri    -->    ${carteEstratte[7].Titolo}`,
        `Speranze o paure    -->    ${carteEstratte[8].Titolo}`,
        `Risultato nel lontano futuro    -->    ${carteEstratte[9].Titolo}`
    ];
  
    visualizzaRisultati(risultati);
}

export function metodoCartaSingola() {
    const carteEstratte = pescaCarte(1);
    const risultati = [
        {
          LetturaEstrazione: "Carta estratta",
          Carta: carteEstratte[0]
        }
    ];

    visualizzaRisultati(risultati);
}