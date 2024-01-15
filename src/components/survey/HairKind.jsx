import React from 'react';
import { useDispatch } from 'react-redux';
import { SurveyAction } from '../../store/surveySlice';

const HairKind = () => {
  const dispatch = useDispatch()



  const handleNext = (value) => {
    dispatch(SurveyAction.submitForm({ key: "hairKind", value: value }))
    dispatch(SurveyAction.stepCount(5))

  }

  return (
    <div className="myContainer">
      <div className='childContainer-1'>
        <h1 className="question">Hair Kind ?</h1>
        <div className='btnContainer'>
          <div>
            <button onClick={() => handleNext("Straight")}>Straight</button>
          </div>
          <div>
            <button onClick={() => handleNext("Wavy")}>Wavy</button>
          </div>
          <div>
            <button onClick={() => handleNext("Curly")}>Curly</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HairKind;
