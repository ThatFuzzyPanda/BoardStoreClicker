import React from "react";
import "./shopItem.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShopItem = (props) => {
  let items = props.test;
  const notify = (Pcheck) => {
    if (Pcheck == true) {
      toast.success("purchase successful", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } else {
      toast.error("purchase failed not enough boards", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };

  const buyItem = (item) => {
    if (props.count >= item.Price) {
      notify(true);
      props.setCount(props.count - item.Price);
      item["Amount"] = item.Amount + 1;
      item["Price"] = item.Price * 2;
      if (item.Amount >= 1) {
        item["Active"] = true;
      }
      localStorage.setItem("items", JSON.stringify(items));
    } else {
      notify(false);
    }
  };
  return (
    <div className="Shop">
      {items.map((item, index) => (
        <ul className="ShopPeice" key={index}>
          <h2 style={{ margin: 10 }}>{item.Name} </h2>
          <h2 style={{ margin: 10 }}>{item.Price}</h2>
          <h2 style={{ margin: 10 }}>{item.Amount}</h2>
          <button className="shopBtn" onClick={() => buyItem(item)}>
            Buy
          </button>
        </ul>
      ))}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ShopItem;
