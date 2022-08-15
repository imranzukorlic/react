import React from "react";
import Title from "../title/Title";
// const style = {
//   color: "blue",
//   fontSize: "40px",
// };

const Greeting = ({
  name,
  children,
  fontSize,
  fontColor,
  handleaParentClick,
}) => {
  const sayWelcome = (name) => {
    alert(`WELCOME ${name}`);
  };
  return (
    <>
      {children}
      {/* <h3
        onClick={() => sayWelcome(name)}
        style={{
          color: fontColor,
          fontSize: fontSize,
        }}
      >
        Hello, {name}
      </h3>
      <p>How are you?</p>
      {children} */}
      <hr />
      <button onClick={handleaParentClick}>Childe button</button>
      <Title clickHandler={handleaParentClick} />
    </>
  );
};
export default Greeting;
