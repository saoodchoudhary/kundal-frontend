// SurveyForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const ComparisonSurvey_F = () => {

  const dispatch = useDispatch();
  
  const { currentProduct} = useSelector(state => state.survey);


  const handleNext = (value) => {
    if(currentProduct ===1){
      dispatch(SurveyAction.submitQuestion({key:"comparisonSurvey1",value:value}));
      dispatch(SurveyAction.questionCount1(8));
    }
    else if(currentProduct === 2){
      dispatch(SurveyAction.submitQuestion({key:"comparisonSurvey2",value:value}));
      dispatch(SurveyAction.questionCount2(8));
    }
    else if(currentProduct === 3) {
      dispatch(SurveyAction.submitQuestion({key:"comparisonSurvey3",value:value}));
      dispatch(SurveyAction.questionCount3(8));
    }
  };

  return (

    <div className="myContainer">
      <div className='childContainer-1'>
        <h1 className="question">Is Kundal a better replacement for your current product?</h1>
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

export default ComparisonSurvey_F
