import React from "react";

export default function Referrals() {
  return (
    <div className="referrals">
      <div className="content-container">
        <h2 className="section-title">
          Cosa pensano i clienti e gli utenti di Soulbot
        </h2>
        <ul className="referrals-list">
          {referrals.map((el, i) => (
            <li key={i} className="referral">
              <p className="referral__review">{el.review}</p>
              <div className="referral-details-container">
                <img src={el.image} alt="user" />
                <div>
                  <p className="referral__name">{el.name}</p>
                  <p className="referral__position">{el.position}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const referrals = [
  {
    name: "Gino Gigi",
    position: "admin di DAO Arrapo",
    review:
      "Tutto talmento bello da non crederci. Soulbot mi ha cambito la vita, ora sono un uomo flice...",
    image:
      "https://images.unsplash.com/photo-1487573884658-a5d3c667584e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80",
  },
  {
    name: "Gino Gigi",
    position: "admin di DAO Arrapo",
    review:
      "Tutto talmento bello da non crederci. Soulbot mi ha cambito la vita, ora sono un uomo flice...",
    image:
      "https://images.unsplash.com/photo-1487573884658-a5d3c667584e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80",
  },
  {
    name: "Gino Gigi",
    position: "admin di DAO Arrapo",
    review:
      "Tutto talmento bello da non crederci. Soulbot mi ha cambito la vita, ora sono un uomo flice...",
    image:
      "https://images.unsplash.com/photo-1487573884658-a5d3c667584e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80",
  },
  {
    name: "Gino Gigi",
    position: "admin di DAO Arrapo",
    review:
      "Tutto talmento bello da non crederci. Soulbot mi ha cambito la vita, ora sono un uomo flice...",
    image:
      "https://images.unsplash.com/photo-1487573884658-a5d3c667584e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80",
  },
];
