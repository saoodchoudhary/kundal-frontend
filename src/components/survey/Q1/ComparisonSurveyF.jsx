// SurveyForm.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const ComparisonSurveyF = () => {

  const dispatch = useDispatch();
  
  const { currentProduct} = useSelector(state => state.survey);


  const handleNext = (value) => {
    if(currentProduct ===1){
      dispatch(SurveyAction.submitQuestion({key:"comparisonSurvey1",value:value}));
      dispatch(SurveyAction.questionCount1(8));
    }
    else if(currentProduct === 2){
      dispatch(SurveyAction.submitQuestion({key:"comparisonSurvey2",value:value}));
      dispatch(SurveyAction.questionCount2(8));
    }
    else if(currentProduct === 3) {
      dispatch(SurveyAction.submitQuestion({key:"comparisonSurvey3",value:value}));
      dispatch(SurveyAction.questionCount3(8));
    }
  };

  return (

    <div className="myContainer">
      <div className='childContainer-1'>
        <h1 className="question">Is Kundal a better replacement for your current product?</h1>
        <div className='btnImgContainer'>
          <div className='imgBtn'  onClick={() => handleNext("Yes")} >
            <img src='./survey/correct.png' alt='Yes'/>
            <button>Yes</button>
          </div>
          <div className='imgBtn' onClick={() => handleNext("No")}>
            <img src='./survey/wrong.png' alt='No'/>
            <button>No</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ComparisonSurveyF
