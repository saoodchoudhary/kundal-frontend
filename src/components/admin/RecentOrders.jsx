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
    <div className=" p-4">
      <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">Order ID</th>
              <th className="border border-gray-200 px-4 py-2">Customer</th>
              <th className="border border-gray-200 px-4 py-2">Date</th>
              <th className="border border-gray-200 px-4 py-2">Address</th>
              <th className="border border-gray-200 px-4 py-2">City</th>
              <th className="border border-gray-200 px-4 py-2">ZipCode / Country</th>
              <th className="border border-gray-200 px-4 py-2">Phone</th>
              <th className="border border-gray-200 px-4 py-2">Prodcuct Name</th>
              <th className="border border-gray-200 px-4 py-2">Prodcuct Id</th>
              <th className="border border-gray-200 px-4 py-2">Product Quantity</th>
              <th className="border border-gray-200 px-4 py-2">Price</th>
              <th className="border border-gray-200 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map(order => (
              <tr key={order._id}>
                <td className="border border-gray-200 px-4 py-2">{order.orderID}</td>
                <td className="border border-gray-200 px-4 py-2">{order.firstName} {order.lastName}</td>
                <td className="border border-gray-200 px-4 py-2">{order.date}</td>
                <td className="border border-gray-200 px-4 py-2">{order.address}</td>
                <td className="border border-gray-200 px-4 py-2">{order.city}</td>
                <td className="border border-gray-200 px-4 py-2">{order.zipCode} / {order.country}</td>
                <td className="border border-gray-200 px-4 py-2">{order.phone}</td>
                <td className="border border-gray-200 px-4 py-2">{order.productName}</td>
                <td className="border border-gray-200 px-4 py-2">{order.productId}</td>
                <td className="border border-gray-200 px-4 py-2">{order.quantity}</td>
                <td className="border border-gray-200 px-4 py-2">{order.price}</td>
                <td className="border border-gray-200 px-4 py-2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
