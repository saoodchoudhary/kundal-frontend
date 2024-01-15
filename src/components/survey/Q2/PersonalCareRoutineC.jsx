// HairCareRoutine.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const PersonalCareRoutineC = () => {
  const [routine, setRoutine] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(SurveyAction.stepCount(8))
    dispatch(SurveyAction.submitForm({key:"personalCareRoutineC",value:routine}))
  };

  return (

    
    <div className="myContainer">
    <div className='childContainer-1'>
        <h1 className="question">What is your hair care routine?</h1>
        <div className='inputContainer'>
            <input
                id='name'
                type="text"
                name="name"
                onChange={(e) => setRoutine(e.target.value)}
                className="input"
            />
        </div>
    </div>
    <button
        onClick={handleSubmit}
        className="myBtn bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 focus:outline-none"
    >
        Next Step
    </button>
</div>
  );
};


export default PersonalCareRoutineC
