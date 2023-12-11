// RecentOrders.js
import React, { useEffect, useState } from 'react';

const RecentOrders = () => {
  const [items, setItems] = useState([])
  // Fetch recent orders data from an API or use dummy data


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + '/admin/getAllOrder'); // Replace with your backend route
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching order', error);
      }
    };

    fetchData();
  }, []);

  return (
<div className="p-4">
  <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
  <div className="overflow-x-auto">
    {items.map((order) => (
      <div key={order._id} className="flex flex-col border border-gray-200 mb-4 p-4">
        <div className="flex mb-2">
          <span className="font-semibold mr-2">Order ID:</span>
          <span>{order.orderID}</span>
        </div>
        <div className="flex mb-2">
          <span className="font-semibold mr-2">Customer:</span>
          <span>{order.firstName} {order.lastName}</span>
        </div>
        <div className="flex mb-2">
          <span className="font-semibold mr-2">Date:</span>
          <span>{order.date}</span>
        </div>
        <div className="flex mb-2">
          <span className="font-semibold mr-2">Area:</span>
          <span>{order.area}</span>
        </div>
        <div className="flex mb-2">
          <span className="font-semibold mr-2">House No.:</span>
          <span>{order.houseNumber}</span>
        </div>
        <div className="flex mb-2">
          <span className="font-semibold mr-2">Block</span>
          <span>{order.block} </span>
        </div>
        <div className="flex mb-2">
          <span className="font-semibold mr-2">Jada</span>
          <span>{order.jada} </span>
        </div>
        <div className="flex mb-2">
          <span className="font-semibold mr-2">Phone:</span>
          <span>{order.phone}</span>
        </div>
        <div className="flex mb-2">
          <span className="font-semibold mr-2">Product Name:</span>
          <span>{order.productName}</span>
        </div>
        
        <div className="flex mb-2">
          <span className="font-semibold mr-2">Product Quantity:</span>
          <span>{order.quantity}</span>
        </div>
        <div className="flex mb-2">
          <span className="font-semibold mr-2">Price:</span>
          <span>{order.price}</span>
        </div>
        <div className="flex">
          <span className="font-semibold mr-2">Status:</span>
          <span>{order.status}</span>
        </div>
      </div>
    ))}
  </div>
</div>

  
  );
};

export default RecentOrders;
