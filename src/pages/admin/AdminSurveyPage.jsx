import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading';
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AdminSurveyPage = () => {
const  [items, setItems] = useState()
const [isLoading, setIsLoading]= useState(true);

const handleDeleteSurvey = (id) =>{
  setIsLoading(true)
  fetch(`${process.env.REACT_APP_API_URL}/survey/deleteSurvey/${id}`,{
    method:"DELETE"
  })
  .then(response => response.json())
  .then(data => {
    setIsLoading(false);
  })
  .catch(error => {
    console.error('Error fetching survey details:', error)
  
    setIsLoading(false)
  });
  
}
  useEffect(()=>{
    const fetchData = async()=>{
      const res = await fetch(`${process.env.REACT_APP_API_URL}/survey/getAllSurvey`);

      const data = await res.json();
      console.log(data)
      setItems(data)
        setIsLoading(false)  

    };

    fetchData();
  },[isLoading]);

  if(isLoading){
    return <Loading/>
  }
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center my-5">All Survey</h2>
      <div className='flex justify-end my-2 mx-2'>
        <Link className='bg-green-600 text-white px-4 py-1 rounded-md' to="/admin/basicAllSurvey">All Basic Information</Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">User Name</th>
              <th className="border border-gray-200 px-4 py-2">Product Name</th>
              <th className="border border-gray-200 px-4 py-2">View</th>
              <th className="border border-gray-200 px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map(val => (
              <tr key={val._id}>
               <td className="border text-center border-gray-200 px-4 py-2">{(val.name === "") ? "Unknown": val.name}</td>
                <td className="border border-gray-200 align-middle text-center px-4 py-2 ">{val.productName1}</td>
                <td className="border text-center border-gray-200 align-middle px-4 py-2">
                  <div className='cursor-pointer inline-flex text-white py-1 px-4 rounded-md bg-cyan-500 hover:bg-cyan-600  gap-1'><Link to={`/admin/survey/details/${val._id}`} className='flex gap-1 align-middle'><FaEye className='w-3 h-3 self-center'/>View</Link></div>
                </td>
                <td className="border text-center border-gray-200 align-middle px-4 py-2">
                  <div onClick={()=>handleDeleteSurvey(val._id)} className='cursor-pointer inline-flex text-white py-1 px-4 rounded-md bg-red-500 hover:bg-red-600  gap-1'>Delete</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
  )
}

export default AdminSurveyPage
