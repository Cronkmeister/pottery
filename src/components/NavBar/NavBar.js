import React, { useEffect, useState } from "react";
import "./NavBar.scss";

import { VscAccount } from "react-icons/vsc";
import { AiOutlineShopping } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [onHome, setOnHome] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setOnHome(true);
    } else {
      setOnHome(false);
    }
    console.log(onHome);
  }, [location]);

  return (
    <nav className={onHome ? "primary-navigation" : null}>
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
