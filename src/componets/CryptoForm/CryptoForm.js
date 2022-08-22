import React from "react";
import "./CryptoForm.css";
// import CriptoListItem from "../CriptoListItem/CriptoListItem";
import CriptoList from "../CryptoList/CriptoList";
const CryptoForm = () => {
  const Listica = [{ nameCoin: "Bitcoin", price: "21,400.00" }];
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
