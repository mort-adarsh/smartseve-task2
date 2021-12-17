import React, { useState } from "react";

const Item = ({ item, selected, setSelected }) => {
  let [color1, setColor] = useState("white");
  let clicked = (item) => {
    let tmp = [...selected];
    tmp.push(item);
    setSelected(tmp);
    console.log(tmp);
    setColor("grey");
  };
  return (
    <div style={{ backgroundColor: `${color1}` }} onClick={() => clicked(item)}>
      {item}
    </div>
  );
};

export default Item;
