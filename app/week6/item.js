import React from 'react';

function Item({ name, quantity, category }) {
  return (
    <li className="bg-white shadow-md rounded p-4 mb-4">
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-gray-600">Category: {category}</div>
      <div className="text-gray-600">Quantity: {quantity}</div>
    </li>
  );
}

export default Item;