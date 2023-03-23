import React from "react";

export default function Plans() {
  return (
    <div className="plans" id="plans">
      <div class="content-container">
        <h2>Prezzi e Piani</h2>
        <div className="plan">
          <div className="plan--card">
            <div className="plan--card__header">
              <p>Single organization</p>
              <h2>$549</h2>
              <p>LIFETIME/PAID ONLY ONCE</p>
            </div>
            <ul className="plan--card__details">
              <li>Lifetime access to Telegram Bot</li>
              <li>Free updates and integrations</li>
              <li>
                Fully customizable choosing what module to implement and when
              </li>
              <li>Dashboard</li>
              <li>Pol creating module</li>
              <li>Full support from our team</li>
              <li>Further customization and integration upon request</li>
            </ul>
          </div>
          <p style={{ fontSize: "2.8rem" }}>+</p>
          <div className="plan--card">
            <div className="plan--card__header">
              <p>Each user registration</p>
              <h2>$1</h2>
              <p>LIFETIME/PAID ONLY ONCE</p>
            </div>
            <ul className="plan--card__details">
              <li>Lifetime access to Telegram Bot</li>
              <li>Free updates and integrations</li>
              <li>
                Fully customizable choosing what module to implement and when
              </li>
              <li>Dashboard</li>
              <li>Pol creating module</li>
              <li>Full support from our team</li>
              <li>Further customization and integration upon request</li>
            </ul>
          </div>
        </div>

        <div className="plan-actions">
          <button className="btn">Vai alla demo</button>
          <button className="btn">Chiedi più info</button>
        </div>
      </div>
    </div>
  );
}
