// import CryptoForm from "../CryptoForm/CryptoForm";
import React from "react";
import "./CriptoListItem.css";

const CriptoListItem = ({ nameCoin, price, id, onDeleteButton }) => {
  // const deleteCoin = (index) => {
  //   const newCoin = data.filter((coin) => coin.index !== index);
  //   setData(newCoin);
  // };
  const [showMore, setShowMore] = React.useState(false);

  return (
    <>
      <div className="one" key={id}>
        <p>{nameCoin}</p>
        <p>{price}$</p>
        <button className="bot" onClick={() => setShowMore((prev) => !prev)}>
          {!showMore ? "Show more" : "Show less"}
        </button>

        <button onClick={() => onDeleteButton(id)}>X</button>
      </div>
      {showMore && (
        <div className="one">
          <h4>
            ovo je {nameCoin}, cijena mu je {price}$
          </h4>
        </div>
      )}
    </>
  );
};
export default CriptoListItem;
