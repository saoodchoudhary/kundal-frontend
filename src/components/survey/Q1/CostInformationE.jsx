// src/components/CostInputSurvey.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const CostInformationE = () => {
  const [cost, setCost] = useState('');
 const dispatch = useDispatch();

 
 const { currentProduct} = useSelector(state => state.survey);


  const handleInputChange = (e) => {
    setCost(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(currentProduct ===1){
      dispatch(SurveyAction.submitQuestion({key:"cost1",value:cost}))
      dispatch(SurveyAction.questionCount1(6));
    }
    else if(currentProduct === 2){
      dispatch(SurveyAction.submitQuestion({key:"cost2",value:cost}))
      dispatch(SurveyAction.questionCount2(6));
    }
    else if(currentProduct === 3) {
      dispatch(SurveyAction.submitQuestion({key:"cost3",value:cost}))
      dispatch(SurveyAction.questionCount3(6));
    }
    // Add your logic here to handle the survey submission
  };

  return (

    
    <div className="myContainer">
      <form onSubmit={handleSubmit}>
    <div className='childContainer-1'>
        <h1 className="question">Enter Cost</h1>
        <div className='inputContainer'>
            <input
                id='name'
                type="text"
                name="name"
                placeholder='Enter Cost'
                onChange={handleInputChange}
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

export default CostInformationE
