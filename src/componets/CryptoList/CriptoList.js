import CriptoListItem from "../CriptoListItem/CriptoListItem";
import "./CriptoList.css";
import React from "react";
const CriptoList = ({ list }) => {
  const [data, setData] = React.useState(list);
  const deleteTeam = (index) => {
    const newCoin = data.filter((coin) => coin.index != index);
    setData(newCoin);
  };
  return (
    <div className="list">
      <ul>
        {list.map((coin, index) => {
          return (
            <CriptoListItem
              delteButton={() => deleteTeam(index)}
              key={index}
              id={index}
              nameCoin={coin.nameCoin}
              price={coin.price}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default CriptoList;
