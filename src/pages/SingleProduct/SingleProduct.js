import React from "react";
import "./SingleProduct.scss";
import NavBar from "../../components/NavBar/NavBar";
import mug from "../../assests/images/mugs/mug2.jpg";

export default function SingleProduct() {
  return (
    <>
      <NavBar />
      <div className="SP">
        <div className="SP__image-container">
          <img className="SP__image" src={mug} alt="product image"></img>
        </div>
        <div className="SP__detail-container">
          <h1 className="SP__title">white ceramic mug</h1>
          <p className="SP__description"></p>
          <p className="SP__price">$20</p>
          <div className="SP__colours">
            <p>colour</p>
            <div className="SP__colours-container">
              <div className="SP__colour-option"></div>
              <div className="SP__colour-option"></div>
              <div className="SP__colour-option"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
