// HairCareRoutine.jsx

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const PersonalCareRoutineC = () => {
  const [routine, setRoutine] = useState('');
  const dispatch = useDispatch();

  const {formData} = useSelector(state => state.survey)

  useEffect(()=>{
   setRoutine(formData.personalCareRoutineC)
  },[formData.personalCareRoutineC])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SurveyAction.stepCount(9))
    dispatch(SurveyAction.submitForm({key:"personalCareRoutineC",value:routine}))
  };

  return (

    
    <div className="myContainer">
      <form onSubmit={handleSubmit}>
    <div className='childContainer-1'>
        <h1 className="question">What is your hair care routine?</h1>
        <div className='inputContainer'>
            <input
                id='name'
                type="text"
                name="name"
                value={routine}
                onChange={(e) => setRoutine(e.target.value)}
                className="input"
            />
        </div>
    </div>
    <button
    type='submit'
        className="myBtn bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 focus:outline-none"
    >
        Next Step
    </button>
    </form>
</div>
  );
};


export default PersonalCareRoutineC
