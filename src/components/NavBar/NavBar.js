import React from "react";
import "./NavBar.scss";

import { VscAccount } from "react-icons/vsc";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="primary-navigation">
      <div className="nav-wrapper">
        <Link className="logo" to="/">
          <div className="logo__text">Rocky Studios</div>
          <p className="logo__tagline">Artisan Pottery</p>
        </Link>
        <ul className="nav-links">
          <Link className="nav-links__link" to="/shop">
            Shop
          </Link>
          <Link className="nav-links__link" to="/about">
            About
          </Link>
          <Link className="nav-links__link" to="/contact">
            Contact
          </Link>
          <VscAccount className="nav-links__icon" />
          <AiOutlineShopping className="nav-links__icon" />
        </ul>
      </div>
    </nav>
  );
}
