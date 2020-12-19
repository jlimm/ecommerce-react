import React from "react";
import { Link } from "react-router-dom";
import "./footer-section.scss";

const FooterSection = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-block footer-text">
          <h2 className="footer-title">about site</h2>
          <div className="footer-content">
            <p>
              Esqido is the world's leading brand of mink and false eyelashes,
              adorne by celebrities and pro artists around the world. Discover
              the ultimate lash experience with Esqido.
            </p>
            <p>
              <strong>Questions? </strong>
              <a href="mailto:ljmm922@gmail.com">ljmm922@gmail.com</a>
            </p>
            <p>185 Bridgeland Ave, Suite 102, Toronto, ON, M6A 1Y7</p>
          </div>
        </div>
        <div className="footer-block footer-links">
          <h2 className="footer-title">shop</h2>
          <ul className="footer-linklist">
            <li className="linklist-item">
              <Link className="link-primary" to="/shop">
                react
              </Link>
            </li>
            <li className="linklist-item">
              <Link className="link-primary" to="/shop">
                redux
              </Link>
            </li>
            <li className="linklist-item">
              <Link className="link-primary" to="/shop">
                hooks
              </Link>
            </li>
            <li className="linklist-item">
              <Link className="link-primary" to="/shop">
                firebase
              </Link>
            </li>
            <li className="linklist-item">
              <Link className="link-primary" to="/shop">
                account
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-block footer-links">
          <h2 className="footer-title">information</h2>
          <ul className="footer-linklist">
            <li className="linklist-item">
              <Link className="link-primary" to="/shop">
                react
              </Link>
            </li>
            <li className="linklist-item">
              <Link className="link-primary" to="/shop">
                redux
              </Link>
            </li>
            <li className="linklist-item">
              <Link className="link-primary" to="/shop">
                hooks
              </Link>
            </li>
            <li className="linklist-item">
              <Link className="link-primary" to="/shop">
                firebase
              </Link>
            </li>
            <li className="linklist-item">
              <Link className="link-primary" to="/shop">
                account
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-block footer-newsletter">
          <h2 className="footer-title">newsletter</h2>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
