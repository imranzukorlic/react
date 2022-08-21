// import CryptoForm from "../CryptoForm/CryptoForm";
import React from "react";

const CriptoListItem = ({ nameCoin, price, id }) => {
  // const deleteCoin = (index) => {
  //   const newCoin = data.filter((coin) => coin.index !== index);
  //   setData(newCoin);
  // };
  return (
    <div>
      <li key={id}>
        <p>{nameCoin}</p>
        <p>{price}</p>
      </li>
      <button>X</button>
    </div>
  );
};
export default CriptoListItem;
