import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const ProductNameSurvey = () => {
  const [productName, setProductName]= useState("")
  const { currentProduct , qStep3} = useSelector(state => state.survey);
    const dispatch = useDispatch();
    const handleChange =(e)=>{
      setProductName(e.target.value)
    }

    const handleNext = ()=>{
      console.log()
      console.log("curne product"+currentProduct , "pro"+qStep3)
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
    }
  return (
    <div className="myContainer">
    <div className='childContainer-1'>
        <h1 className="question">Product {currentProduct}</h1>
        <div className='inputContainer'>
            <input
                id='productName'
                type="text"
                name="productName"
                placeholder='Product Name'
                onChange={handleChange}
                className="input"
            />
        </div>
    </div>
    <button
        onClick={handleNext}
        className="myBtn bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 focus:outline-none"
    >
        Next Step
    </button>
</div>
  );
};

export default ProductNameSurvey;

