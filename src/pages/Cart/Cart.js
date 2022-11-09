import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./Cart.scss";
import productImage from "../../assests/images/mugs/mug1.jpg";

export default function Cart() {
  const [counter, setCounter] = useState(1);

  const increaseCount = () => {
    setCounter((count) => count + 1);
  };

  const decreaseCount = () => {
    setCounter((count) => count - 1);
  };

  //temp value's
  const itemPrice = 20;
  let totalPrice = itemPrice * counter;

  return (
    <>
      <NavBar />
      <div className="cart">
        {/* left side container */}
        <div className="cart__ls-container">
          <div className="cart__heading-container">
            <h1 className="cart__title">my bag</h1>
            <h2 className="cart__items-total">(2 items)</h2>
          </div>
          {/* product card - repeatable  */}
          <div className="cart__product-card">
            <div className="cart__product-card--imageContainer">
              <img
                className="cart__product-card--image"
                src={productImage}
                alt="product item"
              ></img>
            </div>
            <div className="cart__product-card--detailContainer">
              <h3 className="cart__product-card--title">
                Cermanic mug with handle
              </h3>
              <p>colour: peach</p>
              <p>product id: 109ifvv2</p>
              <div className="cart__product-details">
                <div className="cart__product-details--subCon">
                  <p>item price</p>
                  <p>${itemPrice}</p>
                </div>
                <div className="cart__product-details--subCon">
                  <p>quantity</p>
                  <div className="quantity">
                    <button onClick={decreaseCount}>-</button>
                    <p className="quantity__tot">{counter}</p>
                    <button onClick={increaseCount}>+</button>
                  </div>
                </div>
                <div className="cart__product-details--subCon">
                  <p>total price</p>
                  <p>${totalPrice}</p>
                </div>
              </div>
              <div className="remove-btn__container">
                <button className="remove-btn">remove</button>
              </div>
            </div>
          </div>
        </div>
        {/* right side container */}
        <div className="cart__rs-container">
          <h2 className="cart__order-title">order summary</h2>
          <div className="cart__price-container">
            <p>Subtotal</p>
            <p>$180</p>
          </div>
          <div className="cart__price-container">
            <p>Shipping</p>
            <p>$10</p>
          </div>
          <div className="cart__price-container">
            <p>Discounts</p>
            <p>$0</p>
          </div>
          <div className="cart__price-container">
            <p>Total</p>
            <p>$190</p>
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </>
  );
}
