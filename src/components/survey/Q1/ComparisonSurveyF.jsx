// SurveyForm.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const ComparisonSurveyF = () => {

  const dispatch = useDispatch();
  const [name,setName] = useState('');
  
  const { currentProduct} = useSelector(state => state.survey);

  const {product1, product2, product3} = useSelector(state => state.survey);
  useEffect(()=>{
    if(currentProduct ===1){
      setName(product1.productName1)
    }
    else if(currentProduct === 2){
      setName(product2.productName2)
    }
    else if(currentProduct === 3) {
      setName(product3.productName3)
    }
  },[name, currentProduct , product1.productName1, product2.productName2, product3.productName3])
  

  const handleNext = (value) => {
    if(currentProduct ===1){
      dispatch(SurveyAction.submitQuestion({key:"comparisonSurvey1",value:value}));
      dispatch(SurveyAction.questionCount1(7));
    }
    else if(currentProduct === 2){
      dispatch(SurveyAction.submitQuestion({key:"comparisonSurvey2",value:value}));
      dispatch(SurveyAction.questionCount2(7));
    }
    else if(currentProduct === 3) {
      dispatch(SurveyAction.submitQuestion({key:"comparisonSurvey3",value:value}));
      dispatch(SurveyAction.questionCount3(7));
    }
  };

  return (

    <div className="myContainer">
      <div className='childContainer-1'>
        <h1 className="question">Is {name} a better replacement for your current product?</h1>
        <div className='btnContainer'>
          <div>
          <button onClick={() => handleNext("Yes")}>Yes</button>
        </div>
          <div>
          <button onClick={() => handleNext("No")}>No</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSurveyF
