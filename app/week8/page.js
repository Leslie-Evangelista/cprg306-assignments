import React from 'react';
import ItemList from './item-list'; 

function Page() {
  return (
    <main className="p-4 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}

export default Page;