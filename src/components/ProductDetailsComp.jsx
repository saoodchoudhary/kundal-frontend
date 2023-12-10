import React, {  useState } from 'react'
import { useDispatch } from 'react-redux';
import { UserCartAction } from '../store/userCartSlice';
import TabComponent from './TabComponent';

const ProductDetailsComp = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };


  const dispatch = useDispatch();
  const handleAddCart = (item) => {
    console.log(item)
  const  data ={ 
    itemId: item._id,
    productName: item.title,
    quantity: quantity,
    stock: item.stock,
    productId:item.productId,
    price:item.price,
    weight:item.weight,
    unit:item.unit,
    image:item.image,
    oldPrice:item.price,
    discountPrice:item.discountPrice   
  }
  
    dispatch(UserCartAction.addToCart(data));
  };
  // const renderMarkdown = (input) => {
  //   if (!input) {
  //     return null
  //   }
  //   const lines = input.split('^');;
  //   const elements = lines.map((line, index) => {
  //     // if (line.startsWith('## ')) {
  //     //   return <h2 key={index}>{line.slice(3)}</h2>;
  //     // } else if (line.startsWith('### ')) {
  //     //   return <h3 key={index}>{line.slice(4)}</h3>;
  //     //  }
  //     // else if (line === '\\n') {
  //     //   return <br key={index} />;
  //     // }

  //     return <li key={index}>{line}</li>;

  //   });

  //   return elements;
  // };

  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img 
            className="lg:w-1/2 w-full object-contain object-center rounded border border-gray-200" src={`${process.env.REACT_APP_API_URL}/Images/${item?.image}`} 
            alt={item?.title}/>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{item.category}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{item.title}</h1>
<TabComponent discription={item.description} fragrance={item.fragrance} ingredients={item.ingredients}/>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex bg-gray-200 gap-2 rounded py-1 px-2 text-sm font-semibold">
                  <span className="">{item.weight}</span>
                  <span className="">{item.unit}</span>
                </div>
                {(item.price ==="free")?<div className="flex items-center ml-2"> quantity : {quantity} </div> : 
   <div className="flex items-center ml-2">
      <button
        onClick={decrementQuantity}
        className="text-gray-500 rounded-l border border-gray-300 px-2 py-1 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="px-3">{quantity}</div>
      <button
        onClick={incrementQuantity}
        className="text-gray-500 rounded-r border border-gray-300 px-2 py-1 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-1-1V6a1 1 0 112 0v5h5a1 1 0 110 2h-5v5a1 1 0 01-2 0v-5H6a1 1 0 110-2h5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>}

              </div>
              <div className="flex align-middle gap-4">{(item.price ==="free")? 
                <span className="title-font font-medium text-3xl text-green-600">Free</span>: <><span className="title-font text-xl text-gray-400 line-through">${Number(item.price) + Number(item.discountPrice)}</span>
                <span className="title-font font-medium text-3xl text-gray-900">${item.price}</span></>}
                
              {item.stock >0 ? <button onClick={() => handleAddCart(item)} className="flex ml-auto text-white bg-red-500 border-0 py-2 px-12  focus:outline-none hover:bg-red-600 rounded cursor-pointer">Add to Cart</button> : <div className="flex ml-auto text-white bg-red-500 border-0 py-2 px-12  focus:outline-none  rounded">Out of Stock</div> } 

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetailsComp



