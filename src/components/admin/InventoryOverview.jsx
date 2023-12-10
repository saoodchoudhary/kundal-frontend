// InventoryOverview.js
import React from 'react';

const InventoryOverview = () => {
  // Fetch inventory data from an API or use dummy data
  const inventory = [
    { id: 1, productName: 'Product A', stock: 100, category: 'Electronics' },
    { id: 2, productName: 'Product B', stock: 50, category: 'Clothing' },
    // Add more inventory items
  ];

  return (
    <div className=" p-4">
      <h2 className="text-2xl font-semibold mb-4">Inventory Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {inventory.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">{item.productName}</h3>
            <p>Category: {item.category}</p>
            <p>Stock: {item.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryOverview;
