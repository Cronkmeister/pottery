import React from "react";
import "./Landing.scss";

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
        </ul>
      </nav>
      <header className="main">
        <button className="shop-btn">See Collections</button>
      </header>
      <section>
        <div className="products">
          <div className="products__wrapper">
            <div className="prod-card">
              <div className="prod-card__img-container">
                <img alt="plates"></img>
              </div>
              <h3>plates</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
