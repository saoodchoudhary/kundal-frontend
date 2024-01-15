
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const HowManyTimes_I = () => {
  const [usageCount, setUsageCount] = useState();
 const dispatch = useDispatch()

 
 const totalQuestion = useSelector(state => state.survey.formData.maxProduct);
 const { currentProduct} = useSelector(state => state.survey);

  const handleInputChange = (e) => {
    setUsageCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentProduct ===1){
      dispatch(SurveyAction.submitQuestion({key:"howManyTimes1", value:usageCount}))
      dispatch(SurveyAction.questionCount1(11));
    }
    else if(currentProduct === 2){
      if(totalQuestion === 2)
      {
        dispatch(SurveyAction.stepCount(7))
      }else{
      dispatch(SurveyAction.submitQuestion({key:"howManyTimes2", value:usageCount}))
      dispatch(SurveyAction.currentProductCount(3))
      }
    }
    else if(currentProduct === 3) {
      dispatch(SurveyAction.submitQuestion({key:"howManyTimes3", value:usageCount}))
      dispatch(SurveyAction.stepCount(7))
    }
    
  };

  return (

    <div className="myContainer">
    <div className='childContainer-1'>
        <h1 className="question">How many times have you used Kundal products?</h1>
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

export default HowManyTimes_I
