// ProductManagement.js
import React from 'react';

const ProductManagement = () => {
  // Fetch product data from an API or use dummy data
  const products = [
    { id: 1, name: 'Product 1', price: '$50', stock: 25 },
    { id: 2, name: 'Product 2', price: '$30', stock: 10 },
    // Add more products
  ];

  return (
    <div className=" p-4">
      <h2 className="text-2xl font-semibold mb-4">Product Management</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p>Price: {product.price}</p>
            <p>Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManagement;
