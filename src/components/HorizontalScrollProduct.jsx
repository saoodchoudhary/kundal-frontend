import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const HorizontalScrollProduct = ({ category }) => {

  const scrollRef = useRef(null);
  const [items, setItems] = useState([])

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  useEffect(() => {
  
    if (category) {
    const fetchData = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/product/category/${category}`);
      const data = await res.json();
      setItems(data)
     
    }

      fetchData();
    }

  }, [category])

  return (
    <div className="relative mx-auto max-w-screen-xl my-9 overflow-hidden">
      <h1 className="text-3xl font-semibold text-gray-600 mb-4 border-b-2 border-gray-100 pb-2">Related Product</h1>

      
      <div
        ref={scrollRef}
        className="flex space-x-4 p-4"
        style={{
          scrollBehavior: 'smooth',
          overflowX: 'scroll',
          overflowY: 'hidden',
          WebkitOverflowScrolling: 'touch',
        }}
      >
       {items.map((product) => (
          <div key={product._id} className="group relative flex-shrink-0 w-40 sm:w-56">
            <Link to={`/product/${product._id}`} className="block">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                <img
                  src={`${process.env.REACT_APP_API_URL}/Images/${product.image}`}
                  alt={product.title}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className="mt-2 sm:mt-3">
                <h3 className="text-xs sm:text-sm font-normal text-gray-400 truncate-2-lines">{product.brand}</h3>
                <h3 className="text-xs sm:text-sm font-medium text-gray-700 overflow-hidden overflow-ellipsis whitespace-nowrap sm:whitespace-normal">
  {product.title.length > 27 ? `${product.title.slice(0, 27)}...` : product.title}
</h3>


                <div className="mt-4 flex justify-between">
          {(product.price ==="free")? <p className="text-sm font-medium text-green-600">Free</p>: <> 
            <p className="text-sm font-medium text-blue-700">Price : ${product.price}</p></>}
           
          </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll(-200)} // Adjust the scroll amount as needed
        className="absolute inset-y-[50%] left-0 flex items-center justify-center h-12 w-12 bg-gray-300 bg-opacity-50 hover:bg-opacity-75 text-white z-10"
      >
        &lt;
      </button>
      <button
        onClick={() => scroll(200)} // Adjust the scroll amount as needed
        className="absolute inset-y-[50%] transf right-0 flex items-center justify-center h-12 w-12 bg-gray-300 bg-opacity-50 hover:bg-opacity-75 text-white z-10"
      >
        {'>'}
      </button>
      <style>
        {`
          /* Hide scrollbar */
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default HorizontalScrollProduct;
