import React from 'react'
import { Link } from 'react-router-dom'

const SurveyProductCard = ({product}) => {

    return (
        <>
            <div className="group relative shadow-md px-2 py-2 ">
                <Link to={`/survey/${product._id}`}>
                <div className='flex align-middle gap-1 justify-end text-[13px] text-yellow-800 '><div className=' self-center w-2 h-2 bg-yellow-500 rounded-full shadow-2xl border-2  border-yellow-300'></div>Survey</div>
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
              
              </Link>
            </div>
        </>
      )
    }

export default SurveyProductCard
