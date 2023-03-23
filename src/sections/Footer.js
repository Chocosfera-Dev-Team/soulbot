import React from "react";
import { ReactComponent as FacebookIco } from "../assets/logo-facebook.svg";
import { ReactComponent as InstagramIco } from "../assets/logo-instagram.svg";
import { ReactComponent as TwitterIco } from "../assets/logo-twitter.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content-container">
        <div>
          <div className="brand">
            <div style={{ width: "fit-content" }} className="brand-container">
              <p>Soulbot</p>
            </div>
            <p>
              Il miglior tool di Telegram per far crescere le comunità digitali
            </p>
          </div>
          <div className="social-media-links">
            <p>Join us on</p>
            <div>
              <a href="/">
                <FacebookIco width="30" />
              </a>
              <a href="/">
                <InstagramIco width="30" />
              </a>
              <a href="/">
                <TwitterIco width="30" />
              </a>
            </div>
          </div>
        </div>
        <div className="links-container">
          <div>
            <h3>Company</h3>
            <a href="/">Chocosfera Srl</a>
            <a href="/">Careers</a>
            <a href="/">Terms of use</a>
            <a href="/">Privacy policy</a>
            <a href="/">Contact</a>
          </div>
          <div>
            <h3>Tool</h3>
            <a href="/">Modules</a>
            <a href="/">Documentation</a>
            <a href="/">Support contract</a>
          </div>
          <div>
            <h3>Website</h3>
            <a href="/">Features</a>
            <a href="/">Pricing</a>
            <a href="/">Whitepaper</a>
            <a href="/">Contacts</a>
            <a href="/">Terms of use</a>
            <a href="/">Privacy policy</a>
          </div>
        </div>
        <p className="copyright">
          &copy; 2023 Chocosfera SRL | part. iva 023897458293
        </p>
      </div>
    </footer>
  );
}
