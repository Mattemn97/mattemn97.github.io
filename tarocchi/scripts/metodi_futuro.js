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


export function metodoCelticaCompleta() {
  const carteEstratte = pescaCarte(10);
  const risultati = [
      `Cio' che sta accadendo-->    ${carteEstratte[0].Titolo}`,
      `Influenze esterne-->    ${carteEstratte[1].Titolo}`,
      `Riflessioni-->    ${carteEstratte[2].Titolo}`,
      `Sentimenti-->    ${carteEstratte[3].Titolo}`,
      `La vera causa-->    ${carteEstratte[4].Titolo}`,
      `Sviluppo situazione-->    ${carteEstratte[5].Titolo}`,
      `Cio' che si vuole ottenere-->    ${carteEstratte[6].Titolo}`,
      `Il punto di vista degli altri-->    ${carteEstratte[7].Titolo}`,
      `Speranze o paure-->    ${carteEstratte[8].Titolo}`,
      `Risultato nel lontano futuro-->    ${carteEstratte[9].Titolo}`
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

export function metodoCartaSingola() {
  const carteEstratte = pescaCarte(1);
  const risultati = [
      `Carta estratta-->    ${carteEstratte[0].Titolo}`
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