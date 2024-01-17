// WelcomePage.js

import React from 'react';
import { useDispatch } from 'react-redux'


import "../../style/surveywelcom.css"
import { SurveyAction } from '../../store/surveySlice';
const Welcome = () => {
    const dispatch = useDispatch();

  const hanldeStartSurvey = ()=>{
    dispatch(SurveyAction.stepCount(2))

  }
  return (
    <div className="my-container">
     
    <div className="child-container">
      <div>
      <h1>Welcome to Our Survey</h1>
      <p className="text-gray-600 mb-8">We appreciate your feedback. Please take a moment to complete the survey.</p>
      <button onClick={()=>{hanldeStartSurvey()}} className="start-btn">
        Start Survey
      </button>
      </div>
      <div>
            <img src='./survey/shampoo.png' alt="Shampoo" className="img" />

      </div>
    </div>
  </div>
  );
};



export default Welcome
