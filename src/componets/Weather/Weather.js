import React from "react";
import "./Weather.css";
const Weather = () => {
  //   const [bckColore, setBckColore] = React.useState("");
  const [value, setValues] = React.useState(0);
  const [text, setText] = React.useState("");
  const getTemp = () => {
    const temp = Math.floor(Math.random() * (40 + 20 + 1) - 20);
    setValues(temp);
    let bckColor = "";
    if (temp < 4) {
      bckColor = "blue";
    } else if (temp < 23) {
      bckColor = "white";
    } else {
      bckColor = "red";
    }
    // setBckColore(bckColor);
    document.getElementsByClassName("card")[0].style.backgroundColor = bckColor;
    if (temp > -20 && temp <= -10) {
      setText("SMRZAVANJEE!");
    } else if (temp > 33) {
      setText("NE IZLAGATI SE SUNCU!");
    } else {
      setText("");
    }
  };

  return (
    <div className="body">
      <div className="card">
        <span>TEMPERATURA</span>
        <h1>{value}°C</h1>
        <button onClick={() => getTemp()}>Change Temp</button>
        <div className="card-one">
          <p>"{text}"</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
