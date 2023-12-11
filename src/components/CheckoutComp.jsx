import React, {  useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UserCartAction } from '../store/userCartSlice';

import {useNavigate} from "react-router-dom"
import axios from 'axios';
import Loading from './Loading';

const CheckoutComp = () => {
 const item = useSelector((state)=> state.userCart.cartItem)
 const [emailPurchased, setEmailPurchased] = useState(0)
 const [phonePurchased, setPhonePurchased] = useState(0)
 const [onlyThreeFree, setOnlyThreeFree] = useState(false)
 
 const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const areaRef = useRef();
  const jadaRef = useRef();
  const streetRef = useRef();
  const blockRef = useRef();
  const houseNumberRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  const handleOnSubmit = (e)=>{
    e.preventDefault();
  
    setIsLoading(true)

   const  firstName = firstNameRef.current.value
   const  lastName = lastNameRef.current.value
   const  area = areaRef.current.value
   const  jada = jadaRef.current.value;
   const  street = streetRef.current.value;
   const  block = blockRef.current.value;
   const  houseNumber = houseNumberRef.current.value 
   const  phone = phoneRef.current.value
   const  email = emailRef.current.value

    
   const userDetails = {
    firstName,
    lastName,
    area,
    jada,
    street,
    block,
    houseNumber,
    phone,
    email,
  };
    const fetchEmailAddress = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/getEmailPhonePurchasedCount`,
          {
            phone: phone,
            email: email,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
    
        const data = response.data; // Assuming the response contains 'email' and 'phone' properties
    
        console.log(data);
        setEmailPurchased(data.email);
        setPhonePurchased(data.phone);
    
        console.log(emailPurchased, phonePurchased);
    
        if (data.email >= 3 || data.phone >= 3) {
          console.log("You are not eligible");
          setOnlyThreeFree(true)
          setIsLoading(false)

        }else{
          const Information = {userDetails,item}
          dispatch(UserCartAction.orderConfirm({ item, userDetails }));
        
         fetch(process.env.REACT_APP_API_URL+'/orderconfirm',{
            method:'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(Information)
          }).then(()=>{
            setIsLoading(false)

            dispatch(UserCartAction.removeAllCart())
        navigate('/orderconfirm')
          })
        
        }
      } catch (error) {
        console.error('Error:', error);
        setIsLoading(false)

      }
    };
    
    fetchEmailAddress();
    
      
 
  }

  if(isLoading)
  {
    return <Loading/>
  }

  return (
    <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
       <form onSubmit={handleOnSubmit}>
      <div className="space-y-12">
        

        <div className="border-b border-gray-900/10 pb-12">
           {onlyThreeFree &&   <p className="mt-1 text-sm leading-6 text-red-600">people with the same number or email cannot order at all.</p>}
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive Product.</p>
       
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name*
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  ref={firstNameRef}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                ref={lastNameRef}
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email*
              </label>
              <div className="mt-2">
                <input
                ref={emailRef}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number*
              </label>
              <div className="mt-2">
                <input
                ref={phoneRef}
                  id="number"
                  name="number"
                  type="number"
                  autoComplete="number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="houseNumber" className="block text-sm font-medium leading-6 text-gray-900">
              House Number*
              </label>
              <div className="mt-2">
                <input
                ref={houseNumberRef}
                type='text'
                  id="houseNumber"
                  name="houseNumber"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
               
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="area-address" className="block text-sm font-medium leading-6 text-gray-900">
                Area*
              </label>
              <div className="mt-2">
                <input
                  ref={areaRef}
                  type="text"
                  name="area-address"
                  id="area-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="street" className="block text-sm font-medium leading-6 text-gray-900">
                Street*
              </label>
              <div className="mt-2">
                <input
                ref={streetRef}
                  type="text"
                  name="street"
                  id="street"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="block" className="block text-sm font-medium leading-6 text-gray-900">
                Block*
              </label>
              <div className="mt-2">
                <input
                ref={blockRef}
                  type="text"
                  name="block"
                  id="block"
                  autoComplete="block-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="jada" className="block text-sm font-medium leading-6 text-gray-900">
                Jada*
              </label>
              <div className="mt-2">
                <input
                ref={jadaRef}
                  type="text"
                  name="jada"
                  id="jada"
                  autoComplete="jada"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
          </div>
        </div>
       
      </div>
      {onlyThreeFree &&   <p className="mt-1 text-sm leading-6 text-center text-red-600">people with the same number or email cannot order at all.</p>}
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
        type='submit'
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
    </div>
  )
}

export default CheckoutComp
