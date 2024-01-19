// SurveyComponent.jsx

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const IngredientAwarenessG = () => {
 const dispatch = useDispatch();
 
 const { currentProduct} = useSelector(state => state.survey);

const [name, setName] = useState('')
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
},[name])
  const handleNext = (value) => {
    
    if(currentProduct ===1){
      dispatch(SurveyAction.submitQuestion({key:"ingredientAwarness1",value:value}))
      dispatch(SurveyAction.questionCount1(8));
    }
    else if(currentProduct === 2){
      dispatch(SurveyAction.submitQuestion({key:"ingredientAwarness2",value:value}))
      dispatch(SurveyAction.questionCount2(8));
    }
    else if(currentProduct === 3) {
      dispatch(SurveyAction.submitQuestion({key:"ingredientAwarness3",value:value}))
      dispatch(SurveyAction.questionCount3(8));
    }
    
  };

  return (

    <div className="myContainer">
    <div className='childContainer-1'>
      <h1 className="question">Have you read the ingredients of {name} products?</h1>
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

export default IngredientAwarenessG
