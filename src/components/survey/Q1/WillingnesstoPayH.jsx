// SurveyForm.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const WillingnesstoPayH = () => {
  const [response, setResponse] = useState('');
  const dispatch = useDispatch();


  const { currentProduct } = useSelector(state => state.survey);

  const [name, setName] = useState('')
  const { product1, product2, product3 } = useSelector(state => state.survey);

  useEffect(() => {
    if (currentProduct === 1) {
      setName(product1.productName1)
      setResponse(product1.willingnesstoPay1)
    }
    else if (currentProduct === 2) {
      setName(product2.productName2)
      setResponse(product2.willingnesstoPay2)
    }
    else if (currentProduct === 3) {
      setName(product3.productName3)
      setResponse(product3.willingnesstoPay3)
    }
  }, [name, currentProduct, product1.productName1, product2.productName2, product3.productName3, product1.willingnesstoPay1, product2.willingnesstoPay2, product3.willingnesstoPay3])

  const handleInputChange = (e) => {
    setResponse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentProduct === 1) {
      dispatch(SurveyAction.submitQuestion({ key: "willingnesstoPay1", value: response }))
      dispatch(SurveyAction.questionCount1(9));
    }
    else if (currentProduct === 2) {
      dispatch(SurveyAction.submitQuestion({ key: "willingnesstoPay2", value: response }))
      dispatch(SurveyAction.questionCount2(9));
    }
    else if (currentProduct === 3) {
      dispatch(SurveyAction.submitQuestion({ key: "willingnesstoPay3", value: response }))
      dispatch(SurveyAction.questionCount3(9));
    }
  };

  return (

    <div className="myContainer">
      <form onSubmit={handleSubmit}>
        <div className='childContainer-1'>
          <h1 className="question">How much would you willing to pay for {name} ?</h1>
          <div className='inputContainer'>
            <input
              id='name'
              type="text"
              name="name"
              value={response}
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



export default WillingnesstoPayH
