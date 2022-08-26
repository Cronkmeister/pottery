import React, { useState } from "react";
import "./Shop.scss";

// icons
import { HiOutlineChevronDown } from "react-icons/hi";

// imgs
import mug1 from "../../assests/images/mugs/mug1.jpg";

export default function Shop() {
  const [showing, setShowing] = useState(false);

  // show sort options
  function handleSortButton() {
    if (showing) {
      setShowing(false);
    } else if (!showing) setShowing(true);
  }

  return (
    <div className="shop">
      <div className="shop__banner">
        <h1 className="shop__banner--text">Shop Current Creations</h1>
        <div className="shop__banner--overlay"></div>
      </div>
      {/* <div className="shop__wrapper"></div> */}
      <div className="shop__top-info--wrapper">
        <div className="shop__top-info">
          <p className="shop__items-total">32 Products</p>
          <button className="shop__sort-btn" onClick={handleSortButton}>
            sort <HiOutlineChevronDown className="shop__sort-btn--ChevDown" />
          </button>
          {/* */}
          {showing ? (
            <ul className="shop__sort-list">
              <li>Price ascending</li>
              <li>Price descending</li>
            </ul>
          ) : null}
        </div>
      </div>
      <section className="shop__container">
        {/* category sorting list */}
        <div className="shop__category">
          <div className="shop__category--container">
            <h3 className="shop__category--title">Collections</h3>
            <ul className="shop__category--sublist">
              <li>Plates</li>
              <li>Bowls</li>
              <li>Mugs</li>
              <li>Jugs</li>
            </ul>
          </div>
          <div className="shop__category--container">
            <h3 className="shop__category--title">Color</h3>
            <ul className="shop__category--sublist">
              <li>Yellow</li>
              <li>Blue</li>
              <li>Green</li>
            </ul>
          </div>
          <div className="shop__category--container">
            <h3 className="shop__category--title">Price</h3>
            <input
              className="shop__slider"
              type="range"
              min="1"
              max="100"
            ></input>
          </div>
        </div>
        {/* item cards viewfinder */}
        <div className="shop__items-container">
          <div className="shop__items-card">
            <div className="shop__items-card--sub-container">
              <img className="shop__items-card--image" src={mug1}></img>
            </div>
            <h4 className="shop__items-card--title">White Glaze Mug</h4>
            <p className="shop__items-card--price">$35</p>
          </div>
        </div>
      </section>
    </div>
  );
}
