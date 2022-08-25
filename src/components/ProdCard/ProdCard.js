import React from "react";

function ProdCard(props) {
  return (
    <div className="prod-card">
      <img className="prod-card__img" src={props.image} alt="plates"></img>
      <div className="prod-card__overlay">
        <h3 className="prod-card__overlay--text">{props.text}</h3>
      </div>
    </div>
  );
}

export default ProdCard;
