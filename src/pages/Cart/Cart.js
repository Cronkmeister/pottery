import React from "react";
import NavBar from "../../components/NavBar/NavBar";

export default function Cart() {
  return (
    <>
      <NavBar />
      <div>Cart</div>
      {/* left side container */}
      <div className="ls-container">
        <h1>my bag</h1>
        <h3>(2 items)</h3>
        {/* product card - repeatable  */}
        <div className="product-card">
          <img alt="product item"></img>
          <h3>product title</h3>
          <p>colour</p>
          <p>category</p>
          <p>colour</p>
          <p>product id:</p>
          <div className="product-details">
            <p></p>
          </div>
        </div>
      </div>
      {/* right side container */}
      <div className="rs-container">
        <h2>order summary</h2>
      </div>
    </>
  );
}
