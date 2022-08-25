import React from "react";
import "./Landing.scss";

//components
import ProdCard from "../../components/ProdCard/ProdCard";

// imgs
import plates from "../../assests/images/tom-crew-bowls-unsplash.jpg";
import jugs from "../../assests/images/tom-crew-jugs-unsplash.jpg";
import mugs from "../../assests/images/tom-crew-mugs-unsplash.jpg";

// icons
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Landing() {
  return (
    <>
      <header className="main">
        <button className="shop-btn">See Collections</button>
      </header>
      {/* collections of products */}
      <section>
        <div className="products">
          <div className="products__wrapper">
            <ProdCard image={plates} text="Plates" />
            <ProdCard image={jugs} text="Jugs" />
            <ProdCard image={mugs} text="Mugs" />
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
