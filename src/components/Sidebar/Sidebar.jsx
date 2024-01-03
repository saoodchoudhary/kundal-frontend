import React, { useContext, useEffect, useState } from "react";
import {
  Link,
  useLocation,
} from "react-router-dom";
import "./sidebar.css"
import { activeContextSidebar } from "../../context/SidebarContext";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [category , setCategory] = useState([])
  console.log(category)

  const { isActiveSidebar, setIsActiveSidebar } = useContext(activeContextSidebar);

  const activeStyle = (name) => {
    let bgColor = "";
    if (name === pathname) {
      bgColor = "bg-blue-200";
    } else {
      bgColor = "";
    }
    return bgColor;
  };
 
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + '/getAllCategory'); // Replace with your backend route
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error('Error fetching order', error);
      }
    };
  
    fetchData();
  },[])
  return (
    
      <div  className={`sidebar-container transition-all ${
        isActiveSidebar ? "translate-x-0" : "translate-x-[-100%]"
      }`}>
        {category.map((val, _)=>{
          return(
        <Link key={_} className={`link flex gap-3 align-middle ${activeStyle("/admin/")}`} to={`/product/category/${val.name}`} onClick={()=>setIsActiveSidebar(false)}>
        <img src={`${process.env.REACT_APP_API_URL}/Images/${val.image}`} alt={val.name} className=" self-center w-[24px] h-[24px]"/> {val.name}
        </Link>
          )
        })}
        
      </div>
  );
};

export default Sidebar
