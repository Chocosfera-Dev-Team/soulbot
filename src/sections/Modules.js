import React from "react";

export default function Modules() {
  return (
    <div className="modules" id="modules">
      <div className="content-container">
        <h2 className="section-title">Moduli di Soulbot</h2>

        <ul className="modules__list">
          {modules.map((el, i) => (
            <li key={i} className="module">
              <h3>{el.title}</h3>
              {el.actions.map((el, i) => (
                <div className="module__description">
                  <p className="module__description__command">{el.action}</p>
                  <p>{el.description}</p>
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const modules = [
  {
    title: "Registrazione e Verifica",
    actions: [
      {
        action: "/register",
        description: "",
      },
      {
        action: "/verification",
        description:
          "tutte le principali operazioni di acquisizione nuovo utente",
      },
    ],
  },
  {
    title: "Acquisto di token dalla Dao",
    actions: [
      {
        action: "/wallet",
        description:
          "User ricaricano loro account con criptovalute anche acquistando attraverso carta di credito",
      },
    ],
  },
  {
    title: "Creazione istantanea certificati NFT",
    actions: [
      {
        action: "/createNFT",
        description: "Creazione istantanea di token registrato su blockchain",
      },
      {
        action: "/createNFtree",
        description: "Token associato a asset fisico geolocalizzato",
      },
    ],
  },
  {
    title: "Creazione e gestione sondaggi",
    actions: [
      {
        action: "/poll",
        description:
          "Crea sondaggio che arriva a tutti gli user poi alla fine comunica i risultati in modo automatizzato",
      },
    ],
  },
  {
    title: "Accrescimento del numero di utenti registrati",
    actions: [
      {
        action: "/abracadabra",
        description:
          "Modulo di diffusione basato su uno schema distributivo multilivello",
      },
    ],
  },
  {
    title: "Filtro contenuti sensibili",
    actions: [
      {
        action: "TO BE IMPLEMENTED",
        description: "",
      },
    ],
  },
];
