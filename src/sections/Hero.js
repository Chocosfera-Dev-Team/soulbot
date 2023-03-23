import React from "react";

export default function Hero() {
  return (
    <div className="hero">
      <div className="content-container">
        <div className="hero-text">
          <h1>
            Il miglior tool di Telegram per far crescere le comunità digitali
          </h1>
          <p>
            Con il Soulbot crei i tuoi comandi di registrazione e verifica,
            riscuoti pagamenti, generi token, crei sondaggi. Con soulbot
            gestisci tutto attraverso Telegram automatizzando tutte le fasi con
            semplici azioni
          </p>

          <div className="hero-actions">
            <button className="btn">Vai alla demo</button>
            <button className="btn">Chiedi più info</button>
          </div>
        </div>

        <div className="hero-img">
          <img
            src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            width="400"
            height="300"
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
}
