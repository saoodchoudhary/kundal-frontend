

import React, { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ Component}) => {
    const navigate = useNavigate();
    useEffect(()=>{
      
     
      // Usage:
      const token = localStorage.getItem("uid")
        if(!token){
            navigate('/admin/login')
        }
    })
  return (
    <div>
      <Component/>
    </div>
  );
};

export default ProtectedRoute;