// PersonalCareRoutine.jsx

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const PersonalCareRoutineA = () => {
  const dispatch= useDispatch();
  const [answer, setAnswer] = useState();

  const {formData} = useSelector(state => state.survey)

   useEffect(()=>{
    setAnswer(formData.personalCareRoutineA)
   },[formData.personalCareRoutineA])

  const hanldeSubmit = (e)=>{
    e.preventDefault();
      dispatch(SurveyAction.q2Count(2));
      dispatch(SurveyAction.submitForm({key:"personalCareRoutineA",value:answer}))

  }
  return (
<div className="myContainer">
      <form onSubmit={hanldeSubmit}>
        <div className='childContainer-1'>
          <h1 className="question">What is your personal care routine?</h1>
          <div className='inputContainer'>
            <input
              id='personalCareRoutineA'
              type="text"
              name="personalCareRoutineA"
              placeholder=''
              value={answer}
              onChange={(e)=>{setAnswer(e.target.value)}}
              className="input"
              required
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


export default PersonalCareRoutineA
