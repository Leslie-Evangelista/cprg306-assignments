import React, { useState } from 'react';

function NewItem() {
    // Initialize the 'name' state variable and setter function
    const [name, setName] = useState('');
  
    // Initialize the 'quantity' state variable and setter function with an initial value of 1
    const [quantity, setQuantity] = useState(1);
  
    // Initialize the 'category' state variable and setter function with an initial value of "produce"
    const [category, setCategory] = useState('produce');
  
      // Define the handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    // Create an item object with the current values of name, quantity, and category
    const item = {
      name,
      quantity,
      category
    };

    // Log the item object to the console
    console.log(item);

    // Display an alert with the current state of name, quantity, and category
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

    // Reset the state variables to their initial values
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="container mx-auto mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">Add a New Item</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 mb-2">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        {/* Quantity Field */}
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-600 mb-2">Quantity:</label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            min="1"
            max="99"
            required
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        {/* Category Field */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-600 mb-2">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewItem;