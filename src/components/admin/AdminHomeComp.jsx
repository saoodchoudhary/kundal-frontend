import React, { useEffect, useState } from 'react'
import RecentOrders from './RecentOrders'

const AdminHomeComp = () => {
  const [productLength, setProductLength] = useState(0);
  const [orderLength, setOrderLength] = useState(0);
  const [adminLength, setAdminLength] = useState(0);
  const [categoryLength, setCategoryLength] = useState(0);


  
 
    useEffect(()=>{ 
    const fetchData = async () =>{
      const res = await fetch(`${process.env.REACT_APP_API_URL}/product`);
      const data = await res.json();
      setProductLength(data.length)
    }
    const fetOrder = async () =>{
      const res = await fetch(`${process.env.REACT_APP_API_URL}/admin/getAllOrder`);
      const data = await res.json();
      setOrderLength(data.length)
    }
    const fetAdmin = async () =>{
      const res = await fetch(`${process.env.REACT_APP_API_URL}/getAllAdminUser`);
      const data = await res.json();
      setAdminLength(data.length)
    }
    const fetCategory = async () =>{
      const res = await fetch(`${process.env.REACT_APP_API_URL}/getAllCategory`);
      const data = await res.json();
      setCategoryLength(data.length)
    }
  
      fetchData();
      fetOrder();
      fetAdmin();
      fetCategory();
    },[])

  return (
    <div>
      <div className=" p-4">
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Individual Cards or Panels */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-2">Products</h2>
          <p className="text-2xl font-bold">{productLength}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-2">Total Orders</h2>
          <p className="text-2xl font-bold">{orderLength}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-2">Admin User</h2>
          <p className="text-2xl font-bold">{adminLength}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-2">Total Category</h2>
          <p className="text-2xl font-bold">{categoryLength}</p>
        </div>
      </div>

      {/* Additional sections */}
      <div className="mt-8">
        <RecentOrders/>
      </div>
    </div>
    </div>
  )
}

export default AdminHomeComp
