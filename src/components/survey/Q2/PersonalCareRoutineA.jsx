// PersonalCareRoutine.jsx

import React, {  } from 'react';
import { useDispatch } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const PersonalCareRoutineA = () => {
  const dispatch= useDispatch();

  const handleNext = (val) => {
      dispatch(SurveyAction.q2Count(2));
      dispatch(SurveyAction.submitForm({key:"personalCareRoutineA",value:val}))
     
  };
  return (

    <div className="myContainer">
    <div className='childContainer-1'>
      <h1 className="question">What is your personal care routine?</h1>
      <div className='btnContainer'>
        <div>
          <button onClick={() => handleNext("Shampoo")}>Shampoo</button>
        </div>
        <div>
          <button onClick={() => handleNext("Body Scrub")}>Body Scrub</button>
        </div>
        <div>
          <button onClick={() => handleNext("Body Mist")}>Body Mist</button>
        </div>
        <div>
          <button onClick={() => handleNext("Body Wash")}>Body Wash</button>
        </div>
        <div>
          <button onClick={() => handleNext("Hair Spray")}>Hair Spray</button>
        </div>
        <div>
          <button onClick={() => handleNext("Body Lotion")}>Body Lotion</button>
        </div>
        <div>
          <button onClick={() => handleNext("Treatment")}>Treatment</button>
        </div>
        <div>
          <button onClick={() => handleNext("Scalp Tonic")}>Scalp Tonic</button>
        </div>
      </div>
    </div>
  </div>

  );
};


export default PersonalCareRoutineA
