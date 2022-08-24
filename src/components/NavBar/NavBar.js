import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

import { VscAccount } from "react-icons/vsc";
import { AiOutlineShopping } from "react-icons/ai";

export default function NavBar() {
  return (
    <nav>
      <div className="logo">
        <div className="logo__text">Rocky Studios</div>
        <p className="logo__tagline">Artisan Pottery</p>
      </div>
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
      {/* <div></div> */}
    </nav>
  );
}
