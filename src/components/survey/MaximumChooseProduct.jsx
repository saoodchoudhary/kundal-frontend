import React from 'react';
import { useDispatch } from 'react-redux';
import { SurveyAction } from '../../store/surveySlice';

const MaximumChooseProduct = () => {
  const dispatch = useDispatch();



  const handleNext = (val) => {
    dispatch(SurveyAction.submitForm({ key: "maxProduct", value: val }));
    dispatch(SurveyAction.navCount(Number(val)));

    dispatch(SurveyAction.stepCount(6))

  }

  return (

    <div className="myContainer">
      <div className='childContainer-1'>
        <h1 className="question">How many products did you receive ?</h1>
        <div className='btnContainer'>
          {[1, 2, 3].map((num, _) => (
            <div key={_}>
              <button className='hover:shadow-2xl hover:shadow-blue-500' onClick={() => handleNext(num)}>{num}</button>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};



export default MaximumChooseProduct
