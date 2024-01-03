import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar/Sidebar'
const Home = () => {
  return (
    <div>
       <Navbar/>
       <div className='lg:hidden'>
       <Sidebar/>
       </div>
       <div className='min-h-[100vh] mt-[60px]'>
      <Outlet/></div>
      <Footer/>
    </div>
  )
}

export default Home
