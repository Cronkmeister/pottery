import React from "react";
import "./Landing.scss";

// imgs
import plates from "../../assests/images/tom-crew-bowls-unsplash.jpg";
import jugs from "../../assests/images/tom-crew-jugs-unsplash.jpg";
import mugs from "../../assests/images/tom-crew-mugs-unsplash.jpg";

// icons
import { AiOutlineInstagram, AiOutlineShopping } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";

export default function Landing() {
  return (
    <>
      <nav>
        <div className="logo">
          <div className="logo__text">Rocky Studios</div>
          <p className="logo__tagline">Artisan Pottery</p>
        </div>
        <ul className="nav-links">
          <li className="nav-links__link">Shop</li>
          <li className="nav-links__link">About</li>
          <li className="nav-links__link">Contact</li>
          <VscAccount className="nav-links__icon" />
          <AiOutlineShopping className="nav-links__icon" />
        </ul>
        {/* <div></div> */}
      </nav>
      <header className="main">
        <button className="shop-btn">See Collections</button>
      </header>
      {/* collections of products */}
      <section>
        <div className="products">
          <div className="products__wrapper">
            <div className="prod-card">
              <img className="prod-card__img" src={plates} alt="plates"></img>
              <h3>plates</h3>
            </div>
            <div className="prod-card">
              <img className="prod-card__img" src={jugs} alt="jugs"></img>
              <h3>jugs</h3>
            </div>
            <div className="prod-card">
              <img className="prod-card__img" src={mugs} alt="mugs"></img>
              <h3>mugs</h3>
            </div>
          </div>
        </div>
      </section>
      {/* footer  */}
      <footer className="footer">
        <div className="footer__wrapper">
          <h2 className="footer__header">Reach out to me</h2>
          <p className="footer__copy">
            Or let me reach out to you. I will let you know when I have new
            items coming, exclusive offers and sweet deals.
          </p>
          <input
            className="footer__email-input"
            type="email"
            placeholder="Enter your email"
          ></input>
          <div className="socials-container">
            <AiOutlineInstagram className="social-icon" />
            <FaFacebook className="social-icon" />
            <FiMail className="social-icon" />
          </div>
          <ul className="footer__links">
            <li className="footer__links--link">Contact</li>
            <li className="footer__links--link">FAQ</li>
            <li className="footer__links--link">Shipping</li>
            <li className="footer__links--link">Returns</li>
            <li className="footer__links--link">Terms of Use</li>
            <li className="footer__links--link">Privacy Policy</li>
          </ul>
          <p className="footer__copyright">
            Copyright Rocky Studios © 2022 All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}
