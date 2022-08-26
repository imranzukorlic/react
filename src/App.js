import React from "react";

import "./App.css";
const App = () => {
  const [number, setNumber] = React.useState(0);
  React.useEffect(() => {
    console.log("pozvano");
  }, [number]);
  return (
    <div className="card-container" onClick={() => setNumber(Math.random())}>
      <h2>kljdaskljdskal</h2>
      {number}
    </div>
  );
};
export default App;
