
import {  ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useContext, } from 'react'
import { activeContextSidebar } from '../context/SidebarContext'

const navigation = [
  { name: 'SHAMPOO', href: '/product/category/Shampoo', current: false },
  { name: 'BODY WASH', href: '/product/category/Body Wash', current: false },
  { name: 'HAIR ESSENCE', href: '/product/category/Hair Essence', current: false },
]


const Navbar = () => {
  const item = useSelector((state)=> state.userCart.cartItem)

  const { setIsActiveSidebar, isActiveSidebar } = useContext(activeContextSidebar);

  const handleClick = () => {
    setIsActiveSidebar((prev) => !prev);
  };


  return (
    <div className=' bg-blue-500 fixed top-0 right-0 z-10 w-full'>
    <div className=' h-[60px] max-w-6xl mx-auto flex justify-between px-12 align-middle'>

    <div className="flex items-center justify-center lg:hidden">
      <button
        className="focus:outline-none"
        onClick={handleClick}
      >
        <div className={`w-[20px] h-[14px] flex flex-col gap-[2px] justify-between items-center cursor-pointer ${isActiveSidebar ? 'transform active:bg-gray-300' : ''}`}>
          <span className={`w-full h-[2px] bg-white transition duration-300 ease-in-out transform ${isActiveSidebar ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''}`}></span>
          <span className={`w-full h-[2px] bg-white transition duration-300 ease-in-out ${isActiveSidebar ? 'hidden' : ''}`}></span>
          <span className={`w-full h-[2px] bg-white transition duration-300 ease-in-out transform ${isActiveSidebar ? '-rotate-45 translate-x-[5px] translate-y-[-5px]' : ''}`}></span>
        </div>
      </button>
    </div>

      <div className=' text-white font-semibold text-md self-center'><Link to="/">KUNDAL</Link></div>
      <div className=' justify-center align-middle  self-center gap-12 hidden lg:flex'>
        {navigation.map((val, _)=>{
          return(
            <Link key={_} className='text-sm text-white font-semibold' to={val.href}>{val.name}</Link>
          )
        })}
      </div>

      <Link to="/cart" className='relative  self-center'>
                <button
                  type="button"
                  className="relative rounded-full bg-blue-700 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className='bg-red-500 overflow-hidden p-1 text-white text-xs rounded-full h-5 w-5 flex justify-center items-center absolute -top-1 -right-1'>{item.length}</div>
      </Link>

    </div>
    </div>
     
  )
}

export default Navbar
