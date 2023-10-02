import React from 'react';
import Item from './item';

const item1 = {
    name: "steak 🥩",
    quantity: 2,
    category: "meat",
  };
  
  const item2 = {
    name: "banana bread 🍞",
    quantity: 7,
    category: "bakery",
  };
  
  const item3 = {
    name: "sushi 🍣",
    quantity: 3,
    category: "meat",
  };
  
  const item4 = {
    name: "cupcake 🧁",
    quantity: 1,
    category: "bakery",
  };

  const item5 = {
    name: "burger 🍔",
    quantity: 9,
    category: "meat",
  };
  
  
  function ItemList() {
    const items = [item1, item2, item3, item4, item5,];
  
    return (
      <ul>
        {items.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    );
  }
  
  export default ItemList;