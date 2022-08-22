import React from "react";
import "./CryptoForm.css";
// import CriptoListItem from "../CriptoListItem/CriptoListItem";
import CriptoList from "../CryptoList/CriptoList";
const CryptoForm = () => {
  const [data, setData] = React.useState([]);
  // console.log(data);
  const [forms, setForms] = React.useState({
    nameCoin: "",
    price: "",
    id: "",
  });
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
        <button
          onClick={() =>
            setForms((prev) => ({
              ...prev,
              id: Math.random().toString(36).slice(2, 7),
            }))
          }
        >
          Add ID
        </button>
        <button onClick={() => setData((prev) => [...prev, forms])}>
          Add to list
        </button>
      </div>
      <div className="cr-list">
        <CriptoList list={data} />
      </div>
      {/* <div className="list">
        <ul>
          {data.map((coin, index) => {
            return (
              <CriptoListItem
                // deletButton={1}
                key={index}
                id={index}
                nameCoin={coin.nameCoin}
                price={coin.price}
              />
            );
          })}
        </ul>
      </div> */}
    </>
  );
};
export default CryptoForm;
