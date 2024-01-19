
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import Loading from '../../components/Loading';

const AdminProductSurveyPage = () => {
    const [name, setName] = useState('');
  
    const [items, setItems] = useState([])
    const [uiUpdate, setUiUpdate] = useState(true)
    const [isLoading, setIsLoading] = useState(true);
  
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(process.env.REACT_APP_API_URL + '/survey/admin/GetAllSurveyProduct'); // Replace with your backend route
          const data = await response.json();
          setItems(data);
          setIsLoading(false)
        } catch (error) {
          setIsLoading(false)
          console.error('Error fetching order', error);
        }
      };
  
      fetchData();
    }, [uiUpdate, isLoading]);
  
    const handleShowClick = (val)=>{
      setIsLoading(true)
      
      fetch(`${process.env.REACT_APP_API_URL}/survey/hideSurveyProduct`,{
        method:"POST",
        headers: {
          "Content-Type": "application/json" 
        },
        body:JSON.stringify(val)
      })
      .then((res)=>{
        console.log("success")
        setIsLoading(false)
  
      }).catch((res)=>{
        setIsLoading(false)
  
      })
    }
  
    const handleDeleteAdmin = (id)=>{
      
      setIsLoading(true)
      axios.delete(process.env.REACT_APP_API_URL+'/survey/deleteSurveyProduct/'+id)
      .then((response)=>{
        
        setIsLoading(false)
        setUiUpdate(!uiUpdate)
      })
    }
  
    const handleCreateUser = (e) => {
        e.preventDefault()
      setIsLoading(true)
      const data = {
        "name":name
      }
      fetch(process.env.REACT_APP_API_URL+'/survey/admin/addSurveyProduct',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        }, 
        body:JSON.stringify(data)
      } )
        .then((response) => {
          setIsLoading(false)
          setUiUpdate(!uiUpdate)
          // Store token in localStorage or state for further use (e.g., authentication)
        })
        .catch((error) => {
          console.error('Error:', error.response.data.error);
          // Handle login error (display error message, redirect, etc.)
        });
        setName("")
    };
  
  
    if(isLoading){
      return<Loading/>
    }
  return (
    <div className=" p-4">
      
      <h2 className="text-2xl font-semibold mb-4">Product Survey</h2>
      <div className='xl:max-w-[30%] mx-12 my-12'>
      <form onSubmit={handleCreateUser}>
          
          <div className="mb-4 ">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Survey Product Name</label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter User name"
              required
            />
          </div>
         
         
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Create Product
          </button>
        </form>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Survey Product List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">Name</th>
              <th className="border border-gray-200 px-4 py-2">Hide/Show</th>
              <th className="border border-gray-200 px-4 py-2">Delete Survey Product</th>
            </tr>
          </thead>
          <tbody>
            {items.map(user => (
              <tr key={user._id}>
               <td className="border text-center border-gray-200 px-4 py-2">{user.name}</td>
                <td className="border border-gray-200 align-middle text-center px-4 py-2 "><button className={`${(user.show === "show")?"bg-blue-500 ":"bg-red-500 "} cursor-pointer py-1 px-6 rounded-lg text-white`} onClick={()=>{handleShowClick(user)}}>{(user.show === "show")?"Hide":"Show"}</button></td>
                <td className="border text-center border-gray-200 align-middle px-4 py-2"><div className='cursor-pointer inline-flex text-white py-1 px-4 rounded-md bg-red-600  gap-1' onClick={()=>{handleDeleteAdmin(user._id)}}><MdDelete className=' self-center ' />Delete</div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminProductSurveyPage


