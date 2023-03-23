import React from "react";
import { ReactComponent as TelegramIco } from "../assets/Telegram_logo.svg";

export default function Contact() {
  const handleSubmitEmail = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact" id="contact">
      <div className="content-container">
        <h2 className="section-title">
          Contattaci subito e scopri cosa possiamo fare per te
        </h2>

        <div className="contact__panel">
          <div className="telegram-contact">
            <h3>Su telegram</h3>
            <p>per parlare con il Soulbot support</p>
            <TelegramIco height="80" />
            <button className="btn">Apri chat su telegram</button>
          </div>
          <form className="email-form" onSubmit={handleSubmitEmail}>
            <h3>Compila il form qui</h3>
            <div>
              <input type="text" placeholder="Name*" required />
              <input type="text" placeholder="Organizzazione*" required />
              <input type="email" placeholder="email*" required />
              <input type="number" placeholder="telefono*" required />
            </div>
            <textarea placeholder="Messaggio*"></textarea>
            <input className="btn" type="submit" value="Invia" />
          </form>
        </div>

        <p className="email-address">
          O se preferisci puoi inviarci un messaggio a{" "}
          <strong>support@soulbot.it</strong>
        </p>
      </div>
    </div>
  );
}
