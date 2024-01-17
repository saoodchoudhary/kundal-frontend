// SurveyComponent.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const IngredientAwarenessG = () => {
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
        <div className='btnImgContainer'>
          <div className='imgBtn'  onClick={() => handleNext("Yes")} >
            <img src='./survey/correct.png' alt='Yes'/>
            <button>Yes</button>
          </div>
          <div className='imgBtn' onClick={() => handleNext("No")}>
            <img src='./survey/wrong.png' alt='No'/>
            <button>No</button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default IngredientAwarenessG
