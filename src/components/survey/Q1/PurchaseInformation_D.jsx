// PurchaseLocationSurvey.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const PurchaseInformation_D = () => {
  const dispatch = useDispatch();

  
  const { currentProduct} = useSelector(state => state.survey);


 
   const handleOnSubmit = (value)=>{
    if(currentProduct ===1){
      dispatch(SurveyAction.submitQuestion({key:"purchaseInformation1",value:value}))
      dispatch(SurveyAction.questionCount1(6));
    }
    else if(currentProduct === 2){
      dispatch(SurveyAction.submitQuestion({key:"purchaseInformation2",value:value}))
      dispatch(SurveyAction.questionCount2(6));
    }
    else if(currentProduct === 3) {
      dispatch(SurveyAction.submitQuestion({key:"purchaseInformation3",value:value}))
      dispatch(SurveyAction.questionCount3(6));
    }
   }

  return (

    <div className="myContainer">
      <div className='childContainer-1'>
        <h1 className="question">Where did you purchase it?</h1>
        <div className='btnContainer'>
          <div>
            <button onClick={() => handleOnSubmit("Online")}>Online</button>
          </div>
          <div>
            <button onClick={() => handleOnSubmit("offline")}>Offline</button>
          </div>
        </div>
      </div>
    </div>

  );
};


export default PurchaseInformation_D
