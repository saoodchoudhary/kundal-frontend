import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ item }) => {
 
  return (
    <>
      {item && item.map((product) => (
        <div key={product._id} className="group relative shadow-md px-2 py-2 ">
            <Link to={`/product/${product._id}`}>
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60 ">

              <img
                src={`${process.env.REACT_APP_API_URL}/Images/${product.image}`}
                alt={product.title}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
           
          </div>
            <div>
              <h3 className="text-sm text-gray-700">
              <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
              <span className="text-xs sm:text-sm font-medium text-gray-700 overflow-hidden overflow-ellipsis ">
  {product.title}
</span>
              </h3>
            </div>
            <div className="mt-4 flex justify-between">
          {(product.price ==="free")? <p className="text-md font-medium text-green-600">Free</p>: <> 
            <p className="text-md font-medium text-blue-700">Price : ${product.price}</p></>}
           {product.stock <= 0 && <p className="text-md font-medium text-red-700">Out of Stock</p>
           } 
          </div>
          </Link>
        </div>
      ))}
    </>
  )
}

export default ProductCard
