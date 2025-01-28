function pescaTotCarte(mazzo, tot) {
    // Mescola il mazzo
    const mescolato = [...mazzo].sort(() => Math.random() - 0.5);
    // Estrae le carte
    return mescolato.slice(0, tot);
  }
  
  function stampaCarta(carta, inverso = false) {
    if (!inverso) {
      return `${carta.Titolo} - ${carta.BreveDescrizione}\n${carta.Significato}`;
    } else {
      const devio = Math.random() > 0.5;
      return devio
        ? `${carta.Titolo} - ${carta.BreveDescrizione}\nSignificato: ${carta.Significato}`
        : `${carta.Titolo} - ${carta.BreveDescrizione}\nSignificato inverso: ${carta.SignificatoInverso}`;
    }
  }
  