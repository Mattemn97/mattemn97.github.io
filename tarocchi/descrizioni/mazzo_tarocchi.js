const carteTarocchi = [
  {
    Titolo: "Il Matto",
    Numerologia: "0",
    Elementi: ["Aria"],
    Lettura: "forse",
    Chakra: "Corona",
    PianetaOroscopo: "Urano",
    Significato: "Innocenza, spontaneità, fiducia",
    SignificatoInverso: "Irresponsabilità, sconsideratezza, confusione",
    BreveDescrizione: "Rappresenta nuove possibilità e il coraggio di iniziare."
  },
  {
    Titolo: "Il Mago",
    Numerologia: "1",
    Elementi: ["Fuoco"],
    Lettura: "si",
    Chakra: "Plesso Solare",
    PianetaOroscopo: "Mercurio",
    Significato: "Potere personale, azione, iniziativa",
    SignificatoInverso: "Manipolazione, procrastinazione, inefficacia",
    BreveDescrizione: "Simbolo di potenziale e capacità di trasformare i pensieri in realtà."
  },
  {
    Titolo: "La Papessa",
    Numerologia: "2",
    Elementi: ["Acqua"],
    Lettura: "no",
    Chakra: "Terzo Occhio",
    PianetaOroscopo: "Luna",
    Significato: "Conoscenza nascosta, saggezza spirituale",
    SignificatoInverso: "Segreti rivelati, disconnessione, confusione",
    BreveDescrizione: "Simbolo di intuizione e mistero profondo."
  },
  {
    Titolo: "L'Imperatrice",
    Numerologia: "3",
    Elementi: ["Terra"],
    Lettura: "si",
    Chakra: "Radice",
    PianetaOroscopo: "Venere",
    Significato: "Nutrimento, crescita, bellezza",
    SignificatoInverso: "Stagnazione, squilibri, dipendenze",
    BreveDescrizione: "Rappresenta la madre terra e la fertilità."
  },
  {
    Titolo: "L'Imperatore",
    Numerologia: "4",
    Elementi: ["Fuoco"],
    Lettura: "forse",
    Chakra: "Plesso Solare",
    PianetaOroscopo: "Ariete",
    Significato: "Disciplina, protezione, potere",
    SignificatoInverso: "Tirannia, rigidità, insicurezza",
    BreveDescrizione: "Simbolo di potere e ordine."
  },
  {
    Titolo: "Il Papa",
    Numerologia: "5",
    Elementi: ["Aria"],
    Lettura: "si",
    Chakra: "Cuore",
    PianetaOroscopo: "Toro",
    Significato: "Insegnamento, conformità, fede",
    SignificatoInverso: "Dogmatismo, ribellione, confusione",
    BreveDescrizione: "Rappresenta la guida spirituale e le tradizioni."
  },
  {
    Titolo: "Gli Amanti",
    Numerologia: "6",
    Elementi: ["Aria"],
    Lettura: "no",
    Chakra: "Cuore",
    PianetaOroscopo: "Gemelli",
    Significato: "Unione, connessione, equilibrio",
    SignificatoInverso: "Disarmonia, indecisione, conflitto",
    BreveDescrizione: "Simbolo di amore e decisioni importanti."
  },
  {
    Titolo: "Il Carro",
    Numerologia: "7",
    Elementi: ["Acqua"],
    Lettura: "si",
    Chakra: "Gola",
    PianetaOroscopo: "Cancro",
    Significato: "Forza di volontà, controllo, successo",
    SignificatoInverso: "Perdita di controllo, stagnazione, insicurezza",
    BreveDescrizione: "Rappresenta il trionfo attraverso la determinazione."
  },
  {
    Titolo: "La Giustizia",
    Numerologia: "8",
    Elementi: ["Aria"],
    Lettura: "forse",
    Chakra: "Cuore",
    PianetaOroscopo: "Bilancia",
    Significato: "Giustizia, obiettività, integrità",
    SignificatoInverso: "Ingiustizia, disonestà, parzialità",
    BreveDescrizione: "Simbolo di equilibrio e verità."
  },
  {
    Titolo: "L'Eremita",
    Numerologia: "9",
    Elementi: ["Terra"],
    Lettura: "no",
    Chakra: "Terzo Occhio",
    PianetaOroscopo: "Vergine",
    Significato: "Guida interiore, solitudine produttiva",
    SignificatoInverso: "Isolamento, solitudine, confusione",
    BreveDescrizione: "Rappresenta la ricerca di conoscenza interiore."
  },
  {
    Titolo: "La Ruota della Fortuna",
    Numerologia: "10",
    Elementi: ["Fuoco", "Aria"],
    Lettura: "si",
    Chakra: "Sacrale",
    PianetaOroscopo: "Giove",
    Significato: "Opportunità, mutamento, karma",
    SignificatoInverso: "Sfortuna, resistenza al cambiamento, stagnazione",
    BreveDescrizione: "Simbolo dei cicli della vita e del destino."
  },
  {
    Titolo: "La Forza",
    Numerologia: "11",
    Elementi: ["Fuoco"],
    Lettura: "si",
    Chakra: "Coronario",
    PianetaOroscopo: "Leone",
    Significato: "Coraggio, forza interiore, gentilezza",
    SignificatoInverso: "Debolezza, paura, aggressività",
    BreveDescrizione: "Rappresenta la forza interiore e la capacità di superare le sfide."
  },
  {
    Titolo: "L'Appeso",
    Numerologia: "12",
    Elementi: ["Acqua"],
    Lettura: "no",
    Chakra: "Sacrale",
    PianetaOroscopo: "Nettuno",
    Significato: "Sacrificio, prospettiva, illuminazione",
    SignificatoInverso: "Resistenza, stagnazione, paura del cambiamento",
    BreveDescrizione: "Simbolo di pausa e riflessione."
  },
  {
    Titolo: "La Morte",
    Numerologia: "13",
    Elementi: ["Acqua"],
    Lettura: "no",
    Chakra: "Radice",
    PianetaOroscopo: "Scorpione",
    Significato: "Trasformazione, fine, rinascita",
    SignificatoInverso: "Resistenza al cambiamento, paura, stagnazione",
    BreveDescrizione: "Simbolo di cambiamento e rinnovamento."
 },
 {
    Titolo: "La Temperanza",
    Numerologia: "14",
    Elementi: ["Fuoco", "Acqua"],
    Lettura: "si",
    Chakra: "Gola",
    PianetaOroscopo: "Sagittario",
    Significato: "Equilibrio, armonia, moderazione",
    SignificatoInverso: "Squilibrio, eccessi, conflitti interni",
    BreveDescrizione: "Simbolo di armonia e pazienza."
 },
 {
    Titolo: "Il Diavolo",
    Numerologia: "15",
    Elementi: ["Terra"],
    Lettura: "no",
    Chakra: "Radice",
    PianetaOroscopo: "Capricorno",
    Significato: "Tentazione, attaccamento, ossessione",
    SignificatoInverso: "Liberazione, consapevolezza, indipendenza",
    BreveDescrizione: "Simbolo di vincoli e attrazione."
 },
 {
    Titolo: "La Torre",
    Numerologia: "16",
    Elementi: ["Fuoco"],
    Lettura: "no",
    Chakra: "Terzo Occhio",
    PianetaOroscopo: "Marte",
    Significato: "Sconvolgimento, rivelazione, cambiamento improvviso",
    SignificatoInverso: "Resistenza al cambiamento, crisi evitata, confusione",
    BreveDescrizione: "Simbolo di trasformazioni improvvise."
 },
 {
    Titolo: "La Stella",
    Numerologia: "17",
    Elementi: ["Acqua"],
    Lettura: "si",
    Chakra: "Coronario",
    PianetaOroscopo: "Acquario",
    Significato: "Speranza, ispirazione, serenità",
    SignificatoInverso: "Pessimismo, mancanza di fede, disperazione",
    BreveDescrizione: "Simbolo di ispirazione e guida."
  },
  {
    Titolo: "La Luna",
    Numerologia: "18",
    Elementi: ["Acqua"],
    Lettura: "no",
    Chakra: "Terzo Occhio",
    PianetaOroscopo: "Pesci",
    Significato: "Intuizione, illusioni, sogni",
    SignificatoInverso: "Paura, confusione, inganno",
    BreveDescrizione: "Simbolo di mistero e intuizione."
  },
  {
    Titolo: "Il Sole",
    Numerologia: "19",
    Elementi: ["Fuoco"],
    Lettura: "si",
    Chakra: "Coronario",
    PianetaOroscopo: "Sole",
    Significato: "Felicità, successo, vitalità",
    SignificatoInverso: "Eccessivo ottimismo, egocentrismo, frustrazione",
    BreveDescrizione: "Simbolo di gioia e vitalità."
  },
  {
    Titolo: "Il Giudizio",
    Numerologia: "20",
    Elementi: ["Fuoco", "Acqua"],
    Lettura: "si",
    Chakra: "Gola",
    PianetaOroscopo: "Plutone",
    Significato: "Rinascita, rinnovamento, risveglio",
    SignificatoInverso: "Negazione, stagnazione, resistenza",
    BreveDescrizione: "Simbolo di risveglio e cambiamento."
  },
  {
    Titolo: "Il Mondo",
    Numerologia: "21",
    Elementi: ["Terra"],
    Lettura: "si",
    Chakra: "Radice",
    PianetaOroscopo: "Saturno",
    Significato: "Compimento, realizzazione, integrazione",
    SignificatoInverso: "Incompiuto, ritardo, frustrazione",
    BreveDescrizione: "Simbolo di completamento e perfezione."
  }
];

export default carteTarocchi;
