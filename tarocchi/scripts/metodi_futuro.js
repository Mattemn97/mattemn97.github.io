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
      {
        LetturaEstrazione: "Cio' che sta accadendo",
        Carta: carteEstratte[0]
      },{
        LetturaEstrazione: "Influenze esterne",
        Carta: carteEstratte[1]
      },{
        LetturaEstrazione: "Riflessioni",
        Carta: carteEstratte[2]
      },{
        LetturaEstrazione: "Sentimenti",
        Carta: carteEstratte[3]
      },{
        LetturaEstrazione: "La vera causa",
        Carta: carteEstratte[4]
      },{
        LetturaEstrazione: "Sviluppo situazione",
        Carta: carteEstratte[5]
      },{
        LetturaEstrazione: "Cio' che si vuole ottenere",
        Carta: carteEstratte[6]
      },{
        LetturaEstrazione: "Il punto di vista degli altri",
        Carta: carteEstratte[7]
      },{
        LetturaEstrazione: "Speranze o paure",
        Carta: carteEstratte[8]
      },{
        LetturaEstrazione: "Risultato nel lontano futuro",
        Carta: carteEstratte[9]
      }
    ];
  
    visualizzaRisultati(risultati);
}

export function metodoAlchimista() {
    const carteEstratte = pescaCarte(6);
    const risultati = [
      {
        LetturaEstrazione: "Il passato",
        Carta: carteEstratte[0]
      },{
        LetturaEstrazione: "Il momento presente",
        Carta: carteEstratte[1]
      },{
        LetturaEstrazione: "Il futuro nel suo insieme",
        Carta: carteEstratte[2]
      },{
        LetturaEstrazione: "Futuro prossimo",
        Carta: carteEstratte[3]
      },{
        LetturaEstrazione: "Una catena di eventi",
        Carta: carteEstratte[4]
      },{
        LetturaEstrazione: "Prospettive lontane",
        Carta: carteEstratte[5]
      }
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