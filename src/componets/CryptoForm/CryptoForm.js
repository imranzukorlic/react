import React from "react";
import "./CryptoForm.css";
// import CriptoListItem from "../CriptoListItem/CriptoListItem";
import CriptoList from "../CryptoList/CriptoList";
const CryptoForm = () => {
  const Listica = [
    { id: Math.random(), nameCoin: "Bitcoin", price: "21,529.88" },
    { id: Math.random(), nameCoin: "Ethereum", price: "1,641.79" },
    { id: Math.random(), nameCoin: "BNB", price: "298.54" },
    { id: Math.random(), nameCoin: "XRP", price: "0.3424" },
    { id: Math.random(), nameCoin: "Cardano", price: "0.4606" },
    { id: Math.random(), nameCoin: "Solana", price: "35.72" },
    { id: Math.random(), nameCoin: "Dogecoin", price: "0.06866" },
    { id: Math.random(), nameCoin: "Avalanche", price: "23.39" },
    { id: Math.random(), nameCoin: "Polkadot", price: "7.60" },
    { id: Math.random(), nameCoin: "Litecoin", price: "56.69" },
  ];
  const [data, setData] = React.useState(Listica);
  // console.log(data);
  const [forms, setForms] = React.useState({
    nameCoin: "",
    price: "",
    id: 0,
  });
  const deleteTeam = (id) => {
    // console.log(id);
    const newCoin = data.filter((coin) => coin.id !== id);
    setData(newCoin);
  };
  return (
    <>
      <div className="crypto-form">
        <div className="img">
          <img
            src="https://pngimg.com/uploads/coin/coin_PNG36871.png"
            alt="Coin"
          ></img>
          <span>.CoinSTATS</span>
        </div>

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
          onClick={() => {
            setData((prev) => [
              ...prev,

              {
                nameCoin: forms.nameCoin,
                price: forms.price,
                id: Math.random(),
              },
            ]);
          }}
        >
          Add to list
        </button>
      </div>
      <div className="cr-list">
        <CriptoList list={data} deleteFunc={(id) => deleteTeam(id)} />
      </div>
    </>
  );
};
export default CryptoForm;
