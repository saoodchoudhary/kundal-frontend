import React, { useEffect, useState } from 'react'
import ProductCard from "./ProductCard"
import Loading from './Loading';


const ProductListComp = () => {
  const [item, setItem] = useState([]);



  useEffect(()=>{
  const fetchData = async () =>{
    const res = await fetch(`${process.env.REACT_APP_API_URL}/product`);
    const data = await res.json();
    setItem(data)
  }
    fetchData();
  },[])
  
  if(!item){
    return<Loading/>
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Product</h2>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
        <ProductCard item={item}/>
        </div>
      </div>
    </div>
  )
}

export default ProductListComp
