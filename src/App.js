import React from "react";

import "./App.css";
import Weather from "./componets/Weather/Weather";
// import CryptoForm from "./componets/CryptoForm/CryptoForm";
const App = () => {
  return (
    <div className="card-container">
      {/* <CryptoForm /> */}
      <Weather />
    </div>
  );
};
export default App;
