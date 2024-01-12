import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import SurveyProductCard from '../components/SurveyProductCard'

const SurveyPage = () => {
    const [product, setProduct]= useState()
    const [isLoading, setIsLoading]= useState(true)
    useEffect(()=>{
        const fetchCategory= async()=>{
            const res = await fetch(`${process.env.REACT_APP_API_URL}/survey/getAllProduct`);
            const data = await res.json();
            setProduct(data)
            setIsLoading(false)
        }

        fetchCategory();
    },[isLoading])
if(isLoading)
{
    return <Loading/>
}
  return (
    <div>
     <div className='text-3xl text-gray-900 font-semibold text-center py-3'>Kundal Survey</div> 
      <div className='grid max-w-5xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 mx-auto gap-4 px-2 py-4'>
      {product.map((val, ind) => {
        console.log(val);
        return <SurveyProductCard key={ind} product={val} />;
      })}
    </div>
    </div>
  )
}

export default SurveyPage
