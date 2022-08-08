import React from "react";
import "./Title.css";
// jsx
const Title = ({ name, age }) => {
  //props
  return (
    <h3>
      Zdravo {name}, imas {age} godina
    </h3>
  );
};
export default Title;
