import React from "react";
const CryptoForm = ({ nameCoin, price }) => {
  const [data, setData] = React.useState([]);
  console.log(data);
  const [forms, setForms] = React.useState({ nameCoin: "", price: "" });
  // console.log(forms);

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
              <li>
                <p>{coin.nameCoin}</p> <p>{coin.price}</p>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default CryptoForm;
