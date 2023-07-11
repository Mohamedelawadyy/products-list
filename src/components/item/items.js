import React, { useEffect, useState } from "react";

const Items = (props) => {
  const { items, del } = props;
  let length = items.length;

  let [quantities, setQuantities] = useState(
    items.map((item) => item.quantity)
  );
  console.log(items);

  useEffect(() => {
    setQuantities(items.map((item) => item.quantity));
  }, [items.length]);

  let increaseHandler = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decreaseHandler = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    } else {
      newQuantities[index] = 1;
      setQuantities(newQuantities);
    }
  };

  const ListItem = length ? (
    items.map((item, index) => {
      return (
        <div key={item.id} className="item">
          <p>{item.product}</p>
          <p>{item.price}</p>
          <p className="delete" onClick={() => del(item.id)}>
            &times;
          </p>
          <p>
            <button onClick={() => increaseHandler(index)}>+</button>
            {quantities[index]}
            <button onClick={() => decreaseHandler(index)}>-</button>
          </p>
        </div>
      );
    })
  ) : (
    <div className="text">There are no items, Try to add some.</div>
  );
  return (
    <div>
      <div className="header item">
        <p>Product</p>
        <p>Price</p>
        <p>Edit</p>
        <p>Quantity </p>
      </div>
      {ListItem}
    </div>
  );
};

export default Items;
