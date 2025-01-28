import { pescaCarte } from "https://mattemn97.github.io/tarocchi/scripts/utility.js";

function metodoCelticaSemplice() {
    const carteEstratte = pescaCarte(8);
    console.log(carteEstratte);
    
    const risultati = [
      `Influenze passate:\n${stampaCarta(carteEstratte[0], true)}`,
      `Influenze attuali:\n${stampaCarta(carteEstratte[1], true)}`,
      `Influenze future:\n${stampaCarta(carteEstratte[2], true)}`,
      `Influenze esterne:\n${stampaCarta(carteEstratte[3], true)}`,
      `Influenze interne:\n${stampaCarta(carteEstratte[4], true)}`,
      `Fondo mazzo 1:\n${stampaCarta(carteEstratte[5], true)}`,
      `Fondo mazzo 2:\n${stampaCarta(carteEstratte[6], true)}`,
      `Fondo mazzo 3:\n${stampaCarta(carteEstratte[7], true)}`
    ];
    return risultati.join("\n\n");
  }

  