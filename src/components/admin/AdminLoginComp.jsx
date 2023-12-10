import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const AdminLoginComp = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('')

  const handleLogin = () => {
    axios.post(process.env.REACT_APP_API_URL+'/loginAdmin', { email, password },{ withCredentials: true })
      .then((response) => {
   
        if(!response.data.success)
        {
            setErrMsg(response.data.msg)

        }else{
            
        const { token } = response.data;
        Cookies.set("uid",token)
        localStorage.setItem("uid",token)
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
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        {errMsg !=="" &&  <p className='text-red-500 text-center'>{errMsg}</p>} 
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginComp;
