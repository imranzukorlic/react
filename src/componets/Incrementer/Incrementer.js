import React from "react";
const Incrementer = () => {
  const [value, setValue] = React.useState(-20);
  const click = () => {
    setValue((prev) => prev + 1);
  };
  const secClick = () => {
    setValue((prev) => prev - 1);
  };
  return (
    <div>
      <button onClick={click}>Povecaj +</button>
      {value}
      <button onClick={secClick} disabled={value === 0 || value < 0}>
        Smanji -
      </button>
    </div>
  );
};
export default Incrementer;
