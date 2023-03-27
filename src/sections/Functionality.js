import React from "react";

import { useTranslation } from "react-i18next";

export default function Functionality() {
  const { t } = useTranslation();
  return (
    <div className="functionalities" id="functionality">
      <div className="content-container">
        <h2 className="section-title">{t("functionality.title")}</h2>
        <ul className="functionality-list">
          {functions.map((el, i) => (
            <li key={i} className="functionality">
              <img src={el.img} alt="functionality"></img>
              <h3>{el.title}</h3>
              <p>{el.description}</p>
            </li>
          ))}
        </ul>

        <div className="functionality-actions">
          <button className="btn">{t("functionality.btn-one")}</button>
          <button className="btn">{t("functionality.btn-two")}</button>
        </div>
      </div>
    </div>
  );
}

const functions = [
  {
    img: "https://images.unsplash.com/photo-1597008641621-cefdcf718025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1039&q=80",
    title: "Automazione di tutte le fasi attraverso semplici comandi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "https://images.unsplash.com/photo-1597008641621-cefdcf718025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1039&q=80",
    title:
      "Interfaccia intuitiva con comandi semplici anche per utenti non esperti",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "https://images.unsplash.com/photo-1597008641621-cefdcf718025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1039&q=80",
    title: "Operazioni avanzate su blockchain realizzate in pochi click",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "https://images.unsplash.com/photo-1597008641621-cefdcf718025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1039&q=80",
    title: "Acquistare token senza bisogno di wallet e cryptovalute",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "https://images.unsplash.com/photo-1597008641621-cefdcf718025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1039&q=80",
    title: "Aumentare il coinvolgimento degli utenti attraverso sondaggi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "https://images.unsplash.com/photo-1597008641621-cefdcf718025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1039&q=80",
    title: "Massima trasparenza e affidabilità e rispetto standard KYC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
