import React, { useState } from 'react';
import Item from './item';
import items from './items.json';

function ItemList() {
    // 2. Initialize the sortBy state variable and its setter function
    const [sortBy, setSortBy] = useState("name");
  
    // 3. Sort the Items
    const sortedItems = [...items]; // Create a copy of items to avoid modifying the original array
    sortedItems.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0; // Default case
    });
  
    return (
      <div>
        {/* 4. Create Sort Buttons */}
        <div>
          <button
            onClick={() => setSortBy("name")}
            style={{ backgroundColor: sortBy === "name" ? 'lightblue' : 'white' }}
          >
            Sort by Name
          </button>
          <button
            onClick={() => setSortBy("category")}
            style={{ backgroundColor: sortBy === "category" ? 'lightblue' : 'white' }}
          >
            Sort by Category
          </button>
        </div>
  
        {/* 5. Render the Items */}
        <ul>
          {sortedItems.map((item) => (
            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
          )}
        </ul>
      </div>
    );
  }
  
  export default ItemList;