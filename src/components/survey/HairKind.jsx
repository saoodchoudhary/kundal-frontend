import React from 'react';
import { useDispatch } from 'react-redux';
import { SurveyAction } from '../../store/surveySlice';
import "../../style/survey.css"

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
        <div className='btnImgContainer'>
          <div className='imgBtn'  onClick={() => handleNext("Straight")} >
            <img src='./survey/straight.png' alt='straight'/>
            <button>Straight</button>
          </div>
          <div className='imgBtn' onClick={() => handleNext("Wavy")}>
            <img src='./survey/wavy.png' alt='Wavy'/>
            <button>Wavy</button>
          </div>
          <div className='imgBtn' onClick={() => handleNext("Curly")}>
            <img src='./survey/curly.png' alt='Curly'/>
            <button>Curly</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HairKind;
