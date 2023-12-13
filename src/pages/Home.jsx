import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
       <Navbar/>
       <div className='min-h-[100vh]'>
      <Outlet/></div>
      <Footer/>
    </div>
  )
}

export default Home
