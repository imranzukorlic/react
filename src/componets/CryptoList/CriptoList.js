import CriptoListItem from "../CriptoListItem/CriptoListItem";
import React from "react";
const CriptoList = ({ list }) => {
  const [data, setData] = React.useState(list);
  return (
    <div className="list">
      <ul>
        {list.map((coin, index) => {
          return (
            <CriptoListItem
              // deletButton={1}
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
