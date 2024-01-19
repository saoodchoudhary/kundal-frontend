// Import React and useState hook from React
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../store/surveySlice';
// Functional component for the allergy survey
const Allergies = () => {
  // State to track the user's response
  const dispatch = useDispatch();

  const {product1, product2, product3} = useSelector(state => state.survey)
 console.log("product 1", product1)
 console.log("product 1", product3)
 console.log("product 1", product2)

  const handleNext = (val)=>{
    dispatch(SurveyAction.stepCount(10))
    dispatch(SurveyAction.submitForm({key:"allergies",value:val}));

    
    for (const key in product1) {
      dispatch(SurveyAction.submitForm({key:key,value:product1[key]}))
    }

    if(product2)
    {
      for (const key in product2) {
      dispatch(SurveyAction.submitForm({key:key,value:product2[key]}))
    }

    }

    if(product3)
    {
      for (const key in product3) {
      dispatch(SurveyAction.submitForm({key:key,value:product3[key]}))
    }
    
    }
  }

  return (
    <div className="myContainer">
    <div className='childContainer-1'>
      <h1 className="question">Do you have any allergies ?</h1>
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

export default Allergies
