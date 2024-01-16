import React, {  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const UsageInformationJ = () => {
   const dispatch = useDispatch();
   const totalQuestion = useSelector(state => state.survey.formData.maxProduct);
  const { currentProduct} = useSelector(state => state.survey);



  const handleNext = (answer) => {
    
    if(currentProduct ===1){ 
      if(totalQuestion === 1)
      {
        dispatch(SurveyAction.stepCount(7))
      }else{
      dispatch(SurveyAction.submitQuestion({key:"usageInformation1",value:answer}))
      dispatch(SurveyAction.currentProductCount(2))
      }
    }
    // else if(currentProduct === 2){
    //   dispatch(SurveyAction.submitQuestion({key:"usageInformation2",value:answer}))
    //   dispatch(SurveyAction.currentProductCount(2))
    // }
    // else if(currentProduct === 3) {
    //   dispatch(SurveyAction.submitQuestion({key:"usageInformation3",value:answer}))
    //   dispatch(SurveyAction.currentProductCount(2))
    // }
  };

  return (

    <div className="myContainer">
      <div className='childContainer-1'>
        <h1 className="question">Have you seen a difference after using Kundal hair/skin products?</h1>
        <div className='btnContainer'>
          <div>
            <button onClick={() => handleNext("Yes")}>Yes</button>
          </div>
          <div>
            <button onClick={() => handleNext("No")}>No</button>
          </div>
        </div>
      </div>
    </div>

   
  );
};


export default UsageInformationJ
