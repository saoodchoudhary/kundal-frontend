// UserManagement.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
const UserManagement = () => {
  // Fetch user data from an API or use dummy data
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [items, setItems] = useState([])
  const [uiUpdate, setUiUpdate] = useState(true)
  // Fetch recent orders data from an API or use dummy data


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + '/getAllAdminUser'); // Replace with your backend route
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching order', error);
      }
    };

    fetchData();
  }, [uiUpdate]);

  const handleDeleteAdmin = (id)=>{
    axios.delete(process.env.REACT_APP_API_URL+'/deleteAdmin/'+id)
    .then((response)=>{
      setUiUpdate(!uiUpdate)
    })
  }

  const handleCreateUser = () => {
    axios.post(process.env.REACT_APP_API_URL+'/createAdmin', { name, email, password },{ withCredentials: true })
      .then((response) => {
      
        if(!response.data.success)
        {

        }else{
            
        navigate('/admin')
        }
        // Store token in localStorage or state for further use (e.g., authentication)
      })
      .catch((error) => {
        console.error('Error:', error.response.data.error);
        // Handle login error (display error message, redirect, etc.)
      });
  };


  

  return (
    <div className=" p-4">
      
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>
      <div className='xl:max-w-[30%] mx-12 my-12'>
      <form>
          <div className="mb-4 ">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter User name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter User email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter User password"
              required
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={handleCreateUser}
          >
            Create Admin User
          </button>
        </form>
      </div>
      <h2 className="text-2xl font-semibold mb-4">All Admin User</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">Name</th>
              <th className="border border-gray-200 px-4 py-2">Email</th>
              <th className="border border-gray-200 px-4 py-2">Delete User</th>
            </tr>
          </thead>
          <tbody>
            {items.map(user => (
              <tr key={user._id}>
               <td className="border border-gray-200 px-4 py-2">{user.name}</td>
                <td className="border border-gray-200 px-4 py-2">{user.email}</td>
                <td className="border border-gray-200 align-middle px-4 py-2"><MdDelete className='cursor-pointer' onClick={()=>{handleDeleteAdmin(user._id)}}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
