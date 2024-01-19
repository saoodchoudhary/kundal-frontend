import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const ProductNameSurvey = () => {
  const [productName, setProductName]= useState("")
  const [items, setItems]= useState("")
  const [myError, setMyError]= useState(false)
  const { currentProduct } = useSelector(state => state.survey);
    const dispatch = useDispatch();
    const handleChange =(e)=>{
      setProductName(e.target.value)
    }

    const handleNext = (productName)=>{
      console.log()
      if(productName.length > 2){
      if(currentProduct ===1){
        dispatch(SurveyAction.submitQuestion({key:"productName1",value:productName}))
        dispatch(SurveyAction.questionCount1(2));
      }
      else if(currentProduct === 2){
        dispatch(SurveyAction.submitQuestion({key:"productName2",value:productName}))
        dispatch(SurveyAction.questionCount2(2));
      }
      else if(currentProduct === 3) {
        dispatch(SurveyAction.submitQuestion({key:"productName3",value:productName}))
        dispatch(SurveyAction.questionCount3(2));
      }
      }else{
        setMyError(true)
      }
    }

    useEffect(()=>{
      const fetchData = async()=>{
        const res = await fetch(`${process.env.REACT_APP_API_URL}/survey/GetAllSurveyProduct`);
        const data = await res.json();
        console.log(data)
        setItems(data)
      }
      fetchData();
    },[])
    if(!items)
    {
      return <div>LOading</div>
    }
  return (

    <div className="myContainer">
      <div className='childContainer-1'>
        <h1 className="question">Enter Product Name</h1>
        <div className='mt-6 flex justify-center gap-5 flex-wrap'>
        {items.map((val, ind) => (
          
          <div className="px-6 py-3 border transition-all cursor-pointer rounded-md hover:bg-blue-500 hover:text-white" key={ind} onClick={() => handleNext(val.name)}>{val.name}</div>
        
        ))}
        </div>
      </div>
    </div>

  );
};

export default ProductNameSurvey;

