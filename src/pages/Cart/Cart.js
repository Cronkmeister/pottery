import React from "react";
import NavBar from "../../components/NavBar/NavBar";

export default function Cart() {
  return (
    <>
      <NavBar />
      <div>Cart</div>
      <div className="ls-container">
        <h1>my bag</h1>
        <h3>&lt; items</h3>
      </div>
      <div className="rs-container">
        <h2>order summary</h2>
      </div>
    </>
  );
}
