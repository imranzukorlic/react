import React from "react";
// const style = {
//   color: "blue",
//   fontSize: "40px",
// };

const Greeting = ({ name, children, fontSize, fontColor }) => {
  return (
    <>
      {children}
      <h3
        style={{
          color: fontColor,
          fontSize: fontSize,
        }}
      >
        Hello, {name}
      </h3>
      <p>How are you?</p>
      {children}
    </>
  );
};
export default Greeting;
