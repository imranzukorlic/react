import React from "react";
const CryptoForm = ({ nameCoin, price }) => {
  const [data, setData] = React.useState("");
  //   console.log(data);
  const [forms, setForms] = React.useState({ nameCoin: "", price: "" });

  return (
    <>
      <div className="crypto-form">
        <input
          type="text"
          placeholder="Name Coin"
          value={nameCoin}
          onChange={(e) =>
            setForms((prev) => ({ ...prev, nameCoin: e.target.value }))
          }
          required
        ></input>
        <input
          type="number"
          placeholder="Price coin ******$"
          value={price}
          onChange={(e) =>
            setForms((prev) => ({ ...prev, price: e.target.value }))
          }
          required
        ></input>
        <button
          onClick={(e) =>
            setData((prev) => [...prev, { nameCoin: nameCoin, price: price }])
          }
        >
          Add to list
        </button>
      </div>
      <div className="list"></div>
    </>
  );
};
export default CryptoForm;
