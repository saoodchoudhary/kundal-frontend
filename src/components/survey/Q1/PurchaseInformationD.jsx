// PurchaseLocationSurvey.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';
import "../../../style/survey.css"
const PurchaseInformationD = () => {
  const dispatch = useDispatch();


  const { currentProduct } = useSelector(state => state.survey);
  const [name, setName] = useState()

  const handleChange = (e) => {
    setName(e.target.value)

  }

  const handleNext = (e) => {
    e.preventDefault();
    if (currentProduct === 1) {
      dispatch(SurveyAction.submitQuestion({ key: "purchaseInformation1", value: name }))
      dispatch(SurveyAction.questionCount1(5));
    }
    else if (currentProduct === 2) {
      dispatch(SurveyAction.submitQuestion({ key: "purchaseInformation2", value:  name }))
      dispatch(SurveyAction.questionCount2(5));
    }
    else if (currentProduct === 3) {
      dispatch(SurveyAction.submitQuestion({ key: "purchaseInformation3", value: name }))
      dispatch(SurveyAction.questionCount3(5));
    }
  }

  return (
    <div className="myContainer">
      <form onSubmit={handleNext}>
        <div className='childContainer-1'>
          <h1 className="question">Where did you purchase it from ?</h1>
          <div className='inputContainer'>
            <input
              id='age'
              type="text"
              name="age"
              placeholder=''
              onChange={handleChange}
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


export default PurchaseInformationD
