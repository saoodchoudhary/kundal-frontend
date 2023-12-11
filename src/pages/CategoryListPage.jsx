import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const CategoryListPage = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(()=>{
      
    const fetchData = async () =>{
      const res = await fetch(`${process.env.REACT_APP_API_URL}/product/category/${id}`);
      const data = await res.json();
      setIsLoading(false)
      setItem(data)
    }
  
      fetchData();
    },[id,isLoading])
     
  if(isLoading){
    return<Loading/>
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Category : {id}</h2>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
        <ProductCard item={item}/>
        </div>
      </div>
    </div>
  )
}

export default CategoryListPage
