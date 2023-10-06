import React from 'react';
import Item from './item';

const item1 = {
    name: "Steak 🥩",
    quantity: 2,
    category: "Meat",
  };
  
  const item2 = {
    name: "Banana Bread 🍞",
    quantity: 7,
    category: "Bakery",
  };
  
  const item3 = {
    name: "Sushi 🍣",
    quantity: 3,
    category: "Meat",
  };
  
  const item4 = {
    name: "Cupcake 🧁",
    quantity: 1,
    category: "Bakery",
  };

  const item5 = {
    name: "Burger 🍔",
    quantity: 9,
    category: "Meat",
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