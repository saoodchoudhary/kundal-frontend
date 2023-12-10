import React from 'react'
import AdminSidebarComp from '../../components/admin/AdminSidebarComp'
import {  Outlet } from 'react-router-dom'

const AdminHome = () => {
  return (
    <div>
      <AdminSidebarComp/>
      <div className='md:ml-[280px] ml-0'>    
      <Outlet/>
      </div>
    </div>
  )
}

export default AdminHome
