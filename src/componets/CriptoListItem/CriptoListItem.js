// import CryptoForm from "../CryptoForm/CryptoForm";
import React from "react";
import "./CriptoListItem.css";

const CriptoListItem = ({ nameCoin, price, id, delteButton }) => {
  // const deleteCoin = (index) => {
  //   const newCoin = data.filter((coin) => coin.index !== index);
  //   setData(newCoin);
  // };
  return (
    <div className="one" key={id}>
      <p>{nameCoin}</p>
      <p>{price}$</p>
      <button onClick={delteButton}>X</button>
    </div>
  );
};
export default CriptoListItem;
