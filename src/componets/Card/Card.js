import React from "react";
import "./Card.css";
const Card = ({ image, name, occupation, verification }) => {
  return (
    <>
      <div className="card">
        <img src={image} alt="Slika" height={200} width={200} />
        <div className="container">
          {/* <h4>{verification ? <b>✅{name}</b> : <b>{name}</b>}</h4> */}
          <h4>
            {verification && "✅"}
            {name}
          </h4>
          <p>{occupation}</p>
        </div>
      </div>
    </>
  );
};
export default Card;
