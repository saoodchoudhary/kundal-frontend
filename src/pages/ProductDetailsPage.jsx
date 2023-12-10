import React, { useEffect, useState } from "react";
import ProductDetailsComp from "../components/ProductDetailsComp";
import { useParams } from "react-router-dom";
import HorizontalScrollProduct from "../components/HorizontalScrollProduct";

const ProductDetailsPage = () => {
  const {id} = useParams();

  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await fetch(`${process.env.REACT_APP_API_URL}/product/${id}`);
      const data = await res.json();
      setItem(data)
      setIsLoading(false)
    }

    fetchData();
  },[id])

  if(isLoading){
    return(<div>Loading...</div>)
  }
  return (
    <div onScroll={window.scroll(0,0)}>
      <ProductDetailsComp  item={item}/>
      <HorizontalScrollProduct category={item.category}/>
    </div>
  );
  

};

export default ProductDetailsPage;
