import React, { useEffect, useState } from "react";
import "./NavBar.scss";

import { VscAccount } from "react-icons/vsc";
import { AiOutlineShopping } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [onHome, setOnHome] = useState(true);
  const location = useLocation();

  //when not on home page, hook for Nav color change
  useEffect(() => {
    if (location.pathname === "/") {
      setOnHome(true);
    } else {
      setOnHome(false);
    }
  }, [location]);

  return (
    <nav className={onHome ? "primary-navigation" : null}>
      <div className="nav-wrapper">
        <Link className="logo" to="/">
          <div className="logo__text">Rocky Studios</div>
          <p className="logo__tagline">Artisan Pottery</p>
        </Link>
        <div className="nav-links">
          <Link className="nav-links__link" to="/shop">
            Shop
          </Link>
          <Link className="nav-links__link" to="/about">
            About
          </Link>
          <Link className="nav-links__link" to="/contact">
            Contact
          </Link>
          <div className="nav-links__icon-container">
            <Link className="nav-links__link" to="/login">
              <VscAccount className="nav-links__icon" />
            </Link>
            <Link className="nav-links__link" to="/cart">
              <AiOutlineShopping className="nav-links__icon" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
