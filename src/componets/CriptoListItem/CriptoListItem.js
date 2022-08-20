// import CryptoForm from "../CryptoForm/CryptoForm";
import React from "react";

const CriptoListItem = ({ nameCoin, price, id }) => {
  return (
    <div>
      <li key={id}>
        <p>{nameCoin}</p>
        <p>{price}</p>
      </li>
      <button onClick={(e) => console.log(e.target)}>X</button>
    </div>
  );
};
export default CriptoListItem;
