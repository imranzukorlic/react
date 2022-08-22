import CriptoListItem from "../CriptoListItem/CriptoListItem";
import "./CriptoList.css";
import React from "react";
const CriptoList = ({ list, deleteFunc }) => {
  // const [data, setData] = React.useState( list );
  // console.log(data);
  // const deleteTeam = (id) => {
  //   const newCoin = data.filter((coin) => coin.id !== id);
  //   setData(newCoin);
  // };
  return (
    <div className="list">
      <ul>
        {list.map((coin) => {
          return (
            <CriptoListItem
              delteButton={deleteFunc}
              key={coin.id}
              // id={coin.id}
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
