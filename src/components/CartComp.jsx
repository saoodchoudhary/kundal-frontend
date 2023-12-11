import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { UserCartAction } from "../store/userCartSlice";

const CartComp = () => {

 
  const [onlyThreeFree, setOnlyThreeFree] = useState(false)

  const cartItems = useSelector((state) => state.userCart.cartItem);
   
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleDelete = (id) => {
  
    dispatch(UserCartAction.removeFromCart(id))
    // const updatedCart = cartItems.filter((item) => item.id !== id);
    // setCartItems(updatedCart);
  };
  const handlecheckout = () => {
    let totalFreeItem = 0;
    cartItems.forEach((val) => {
      if (val.price === "free") {
        totalFreeItem++;
      }
    })
    if (totalFreeItem > 3 ) {
      // You have reached the limit for free items
      setOnlyThreeFree(true)
    } else {
      navigate('/checkout')
    }
  }
  const handleQuantityChange = (id, change) => {
    dispatch(UserCartAction.updateQuantity({ itemId: id, change: change })) //change -1, +1
    // setCartItems(updatedCart);
  };
  const totalPrice = cartItems.reduce((acc, item) => {

    let itemPrice;
    if (item.oldPrice === "free") {


      itemPrice = 0;
    } else {

      itemPrice = Number(item.oldPrice);
    }
    const itemQuantity = Number(item.quantity);

    return acc + itemPrice * itemQuantity;
  }, 0);


  return (
    <div className="mx-auto max-w-5xl min-h-screen py-5 px-5">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {onlyThreeFree &&   <p className="mt-1 text-sm leading-6 text-red-600">no one can purchase more than 3 products.</p>}
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.itemId} className="flex relative items-center justify-start gap-3 border-b py-2">


              <div>
                <img
                  src={`${process.env.REACT_APP_API_URL}/Images/${item.image}`}
                  alt={item.productName}
                  className="w-20 h-20 md:h-30 md:w-30 lg:h-40 lg:w-40 object-cover rounded mr-4"
                /></div>
              <div className="flex flex-col gap-4">
                <p className=" mr-5">{item.productName}</p>
              <div className=" w-fit bg-gray-100 gap-2 rounded py-1 px-2 text-sm font-semibold">
                  <span className="">{item.weight}</span>
                  <span className="">{item.unit}</span>
                </div>
                <div className="flex items-center gap-3">
                {(item.price ==="free")? <p className="text-sm font-medium text-green-600">Free</p>: <> 
            <p className="text-sm font-medium text-blue-700">Price : ${item.price}</p></>}

                  {item.price === "free" ? <div>1 pcs</div> : <> 
                    <button
                    className="mr-1 bg-gray-200 px-3 py-1 rounded"
                    onClick={() => handleQuantityChange(item.itemId, -1)}
                  >
                    -
                  </button>
                    <span>{item.quantity}</span>
                    <button
                      className="ml-1 bg-gray-200 px-3 py-1 rounded"
                      onClick={() => handleQuantityChange(item.itemId, 1)}
                    >
                      +
                    </button></>}
                </div>
              </div>
              <button >
                <MdDelete className="ml-4 absolute top-4 right-4 w-5 h-5 text-gray-700" onClick={() => handleDelete(item.itemId)} />
              </button>
            </div>
          ))}
           {onlyThreeFree &&   <p className="mt-1 text-sm leading-6 text-red-600">no one can purchase more than 3 products.</p>}
          <div className="mt-4 flex flex-col-reverse gap-2 sm:gap-0 sm:flex-row justify-between">
            <Link to="/">
              <button className="border px-4 py-2 rounded">Continue Shopping</button>
            </Link>
            <div className="flex justify-between sm:justify-start">
              <p className="font-semibold px-4 py-2 text-lg">Total: ${totalPrice}</p>
              <button onClick={handlecheckout} className="  bg-blue-500  text-white px-4 py-2 rounded mr-4">
                Checkout
              </button>


            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartComp;
