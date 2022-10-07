import React, { useState } from "react";
import "./Shop.scss";
import NavBar from "../../components/NavBar/NavBar";
// import axios from "axios";

// icons
import { HiOutlineChevronDown } from "react-icons/hi";

// imgs
import mug1 from "../../assests/images/mugs/mug1.jpg";

const apiURL = "http://localhost:5050/api/stripe/create-checkout-session";
const options = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  body: JSON.stringify({
    items: [
      { id: 1, quantity: 3 },
      { id: 2, quantity: 1 },
    ],
  }),
};

export default function Shop() {
  const [showing, setShowing] = useState(false);

  // show sort options
  function handleSortButton() {
    if (showing) {
      setShowing(false);
    } else if (!showing) setShowing(true);
  }

  const handleCheckout = (event) => {
    event.preventDefault();
    fetch(apiURL, options)
      .then((response) => {
        console.log(response);
        if (response.ok) return response.json();
        return response.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <NavBar />
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
                <img
                  className="shop__items-card--image"
                  src={mug1}
                  alt="shop item"
                ></img>
              </div>
              <h4 className="shop__items-card--title">White Glaze Mug</h4>
              <p className="shop__items-card--price">$35</p>
            </div>
          </div>
        </section>
        {/* <form action={apiURL} method="POST"> */}
        <form onSubmit={handleCheckout}>
          <button type="submit">Checkout</button>
        </form>
      </div>
    </>
  );
}
