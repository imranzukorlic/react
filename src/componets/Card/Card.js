import React from "react";
import "./Card.css";
const Card = ({ image, name, occupation }) => {
  return (
    <>
      <div className="card">
        <img src={image} alt="Slika" height={200} width={200} />
        <div className="container">
          <h4>
            <b>{name}</b>
          </h4>
          <p>{occupation}</p>
        </div>
      </div>
    </>
  );
};
export default Card;
