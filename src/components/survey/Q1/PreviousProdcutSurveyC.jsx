// SurveyForm.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const PreviousProdcutSurveyC = () => {
  const [previousProduct, setPreviousProduct] = useState('');
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const { currentProduct } = useSelector(state => state.survey);
  const {product1, product2, product3} = useSelector(state => state.survey);
  useEffect(()=>{
    if(currentProduct ===1){
      setName(product1.productName1)
    }
    else if(currentProduct === 2){
      setName(product2.productName2)
    }
    else if(currentProduct === 3) {
      setName(product3.productName3)
    }
  })
  

    const handleChange = (e) => {
      setPreviousProduct(e.target.value);
    };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentProduct ===1){
      dispatch(SurveyAction.submitQuestion({key:"previousProduct_c1", value:previousProduct}));
      dispatch(SurveyAction.questionCount1(4));
    }
    else if(currentProduct === 2){
      dispatch(SurveyAction.submitQuestion({key:"previousProduct_c2", value:previousProduct}));
      dispatch(SurveyAction.questionCount2(4));
    }
    else if(currentProduct === 3) {
      dispatch(SurveyAction.submitQuestion({key:"previousProduct_c3", value:previousProduct}));
      dispatch(SurveyAction.questionCount3(4));
    }
    console.log('Survey submitted:', { previousProduct });
  };

  return (
    
      <form onSubmit={handleSubmit}>
    <div className="myContainer">
    <div className='childContainer-1'>
        <h1 className="question">What were you using before {name}?</h1>
        <div className='inputContainer'>
            <input
                id='name'
                type="text"
                name="name"
                placeholder='Previous Product Name..'
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
</div>
</form>

  );
};

export default PreviousProdcutSurveyC
