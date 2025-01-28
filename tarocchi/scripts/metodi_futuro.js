async function metodoCelticaSemplice(mazzoFile) {
    const mazzo = await caricaJson(mazzoFile);
    const carteEstratte = pescaTotCarte(mazzo, 8);
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
  
  async function caricaJson(filePath) {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Errore nel caricamento del file: ${filePath}`);
    }
    return response.json();
  }
  