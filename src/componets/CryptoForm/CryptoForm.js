import React from "react";
// import CriptoListItem from "../CriptoListItem/CriptoListItem";
import CriptoList from "../CryptoList/CriptoList";
const CryptoForm = () => {
  const [data, setData] = React.useState([]);
  const [forms, setForms] = React.useState({
    nameCoin: "",
    price: "",
  });
  // const deleteCoin = (index) => {
  //   const newCoin = data.filter((coin) => coin.index !== index);
  //   setData(newCoin);
  // };

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
        <button onClick={(e) => setData((prev) => [...prev, forms])}>
          Add to list
        </button>
      </div>
      <section>
        <CriptoList list={data} />
      </section>
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
