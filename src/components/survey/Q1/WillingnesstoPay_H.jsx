// SurveyForm.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const WillingnesstoPay_H = () => {
  const [response, setResponse] = useState('');
  const dispatch = useDispatch();

  
  const { currentProduct} = useSelector(state => state.survey);

  const handleInputChange = (e) => {
    setResponse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentProduct ===1){
      dispatch(SurveyAction.submitQuestion({key:"willingnesstoPay1",value:response}))
      dispatch(SurveyAction.questionCount1(10));
    }
    else if(currentProduct === 2){
      dispatch(SurveyAction.submitQuestion({key:"willingnesstoPay2",value:response}))
      dispatch(SurveyAction.questionCount2(10));
    }
    else if(currentProduct === 3) {
      dispatch(SurveyAction.submitQuestion({key:"willingnesstoPay3",value:response}))
      dispatch(SurveyAction.questionCount3(10));
    }
  };

  return (

    <div className="myContainer">
    <div className='childContainer-1'>
        <h1 className="question">How much would you be willing to pay for Kundal?</h1>
        <div className='inputContainer'>
            <input
                id='name'
                type="text"
                name="name"
                onChange={handleInputChange}
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



export default WillingnesstoPay_H
