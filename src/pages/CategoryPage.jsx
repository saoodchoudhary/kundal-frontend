
import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'



const CategoryPage = () => {

  const [category, setCategory] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + '/getAllCategory'); // Replace with your backend route
        const data = await response.json();
        setCategory(data);
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching order', error);
      }
    };

    fetchData();
  }, [isLoading])
  if(isLoading)
  {
    return <Loading/>
  }
  return (
    <div className="bg-white max-w-[1200px] mr-auto ml-auto my-8">
      <div>
      <div className="flex justify-center">
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-5 md:gap-9">
    {category.map((item, ind) => (
      <Link key={ind} to={`/product/category/${item.name}`} className="p-1 sm:p-2">
        <div className="rounded shadow-lg overflow-hidden">
          <img
            className="w-[190px] sm:w-[250px] md:w-[250px] lg:w-[300px] xl:w-[350px] h-auto sm:h-auto md:h-auto lg:h-auto xl:h-auto object-cover"
            src={`${process.env.REACT_APP_API_URL}/Images/${item?.image}`}
            alt="Sunset in the mountains"
          />
          <div className="py-4">
            <div className="font-semibold text-center text-lg mb-2">{item.name}</div>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>


      
      </div>
    </div>
  )
}

export default CategoryPage
