import React from "react";
import "./Title.css";
// jsx
const Title = ({ name, age, clickHandler }) => {
  //props
  return (
    <h3 onClick={clickHandler}>
      Zdravo {name}, imas {age} godina
    </h3>
  );
};
export default Title;
