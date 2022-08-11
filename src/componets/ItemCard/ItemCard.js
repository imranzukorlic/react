import React from "react";
import "./ItemCard.css";

const ItemCard = ({
  image,
  name,
  city,
  distance,
  description,
  recenzije,
  mark,
  location,
}) => {
  return (
    <>
      <div className="bige">
        <div className="secondBig">
          <div className="image">
            <img src={image} alt="slika" />
          </div>
          <div className="text">
            <div className="opet">
              <div className="a">
                <a href="#" className="name">
                  {name}
                </a>
              </div>
              <div className="b">
                <span className="city">{city}</span>
                <span className="tacka">•</span>
                <span className="city">Prikazi na mapi</span>
                <span className="tacka">•</span>
                <span className="distance">{distance} km od centra</span>
              </div>
              <div className="c">
                <span className="beach">Na plaži • Neum Beach (7,6)</span>
              </div>
              <div className="d">
                <p className="description">{description}</p>
              </div>
            </div>
            <div className="stars">
              <div className="aa">
                <span>
                  <div className="how">Izuzetan</div>
                  <div className="rec">{recenzije} recenzija</div>
                </span>
                <div className="mark">{mark}</div>
              </div>
              <div className="location">Lokacija {location}</div>
              <div className="button">
                <button type="button">Prikazi cenu</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
export default ItemCard;
