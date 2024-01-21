// src/components/CostInputSurvey.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const CostInformationE = () => {
  const [cost, setCost] = useState('');
  const dispatch = useDispatch();


  const { currentProduct, product1, product2, product3 } = useSelector(state => state.survey);

  useEffect(() => {
    if (currentProduct === 1) {
      setCost(product1.cost1);
    }
    else if (currentProduct === 2) {
      setCost(product2.cost2);
    }
    else if (currentProduct === 3) {
      setCost(product3.cost3);
    }
  }, [product1.cost1, product2.cost2, product3.cost3, currentProduct]);

  const handleInputChange = (e) => {
    setCost(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentProduct === 1) {
      dispatch(SurveyAction.submitQuestion({ key: "cost1", value: cost }))
      dispatch(SurveyAction.questionCount1(7));
    }
    else if (currentProduct === 2) {
      dispatch(SurveyAction.submitQuestion({ key: "cost2", value: cost }))
      dispatch(SurveyAction.questionCount2(7));
    }
    else if (currentProduct === 3) {
      dispatch(SurveyAction.submitQuestion({ key: "cost3", value: cost }))
      dispatch(SurveyAction.questionCount3(7));
    }
    // Add your logic here to handle the survey submission
  };

  return (


    <div className="myContainer">
      <form onSubmit={handleSubmit}>
        <div className='childContainer-1'>
          <h1 className="question">Enter Price</h1>
          <div className='inputContainer'>
            <input
              id='name'
              type="text"
              name="name"
              placeholder='Enter Price'
              value={cost}
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
