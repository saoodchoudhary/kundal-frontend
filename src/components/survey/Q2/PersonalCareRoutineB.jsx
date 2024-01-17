// ProductPurchaseSource.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const PersonalCareRoutineB = () => {
  const [source, setSource] = useState('');
  const dispatch= useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SurveyAction.q2Count(3));
    dispatch(SurveyAction.submitForm({key:"personalCareRoutineB",value:source}))
  };

  return (

    <div className="myContainer">
      <form onSubmit={handleSubmit}>
    <div className='childContainer-1'>
        <h1 className="question">where do you buy your personal care products?</h1>
        <div className='inputContainer'>
            <input
                id='name'
                type="text"
                name="name"
                onChange={(e) => setSource(e.target.value)}
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


export default PersonalCareRoutineB
