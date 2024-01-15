// SurveyComponent.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const IngredientAwareness_G = () => {
 const dispatch = useDispatch();

 
 const { currentProduct} = useSelector(state => state.survey);


  const handleNext = (value) => {
    
    if(currentProduct ===1){
      dispatch(SurveyAction.submitQuestion({key:"ingredientAwarness1",value:value}))
      dispatch(SurveyAction.questionCount1(9));
    }
    else if(currentProduct === 2){
      dispatch(SurveyAction.submitQuestion({key:"ingredientAwarness2",value:value}))
      dispatch(SurveyAction.questionCount2(9));
    }
    else if(currentProduct === 3) {
      dispatch(SurveyAction.submitQuestion({key:"ingredientAwarness3",value:value}))
      dispatch(SurveyAction.questionCount3(9));
    }
    
  };

  return (

    
    <div className="myContainer">
      <div className='childContainer-1'>
        <h1 className="question">Have you read the ingredients of Kundal products?</h1>
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

export default IngredientAwareness_G
