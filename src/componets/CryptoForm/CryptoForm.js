import React from "react";
import CriptoListItem from "../CriptoListItem/CriptoListItem";
const CryptoForm = () => {
  const [data, setData] = React.useState([]);
  const [forms, setForms] = React.useState({ nameCoin: "", price: "" });

  return (
    <>
      <div className="crypto-form">
        <input
          type="text"
          placeholder="Name Coin"
          onChange={(e) =>
            setForms((prev) => ({ ...prev, nameCoin: e.target.value }))
          }
          required
        ></input>
        <input
          type="number"
          placeholder="Price coin ******$"
          onChange={(e) =>
            setForms((prev) => ({ ...prev, price: e.target.value }))
          }
          required
        ></input>
        <button onClick={() => setData((i) => [...i, forms])}>
          Add to list
        </button>
      </div>
      <div className="list">
        <ul>
          {data.map((coin) => {
            return (
              <CriptoListItem
                id={coin.price.toString()}
                nameCoin={coin.nameCoin}
                price={coin.price}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default CryptoForm;
