
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const HowManyTimesI = () => {
  const [usageCount, setUsageCount] = useState();
 const dispatch = useDispatch()

 
 const totalQuestion = useSelector(state => state.survey.formData.maxProduct);
 const { currentProduct} = useSelector(state => state.survey);

 const [name, setName] = useState('')
 const {product1, product2, product3} = useSelector(state => state.survey);

 useEffect(()=>{
  if(currentProduct ===1){
    setName(product1.productName1)
    setUsageCount(product1.howManyTimes1)
  }
  else if(currentProduct === 2){
    setName(product2.productName2)
    setUsageCount(product2.howManyTimes2)
  }
  else if(currentProduct === 3) {
    setName(product3.productName3)
    setUsageCount(product3.howManyTimes3)
  }
},[name,product1.howManyTimes1,product2.howManyTimes2,product3.howManyTimes3, currentProduct , product1.productName1, product2.productName2, product3.productName3])
  const handleInputChange = (e) => {
    setUsageCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentProduct ===1){
      dispatch(SurveyAction.submitQuestion({key:"howManyTimes1", value:usageCount}))
      dispatch(SurveyAction.questionCount1(10));
    }
    else if(currentProduct === 2){
      if(totalQuestion === 2)
      {
        dispatch(SurveyAction.stepCount(8))
      }else{
      dispatch(SurveyAction.submitQuestion({key:"howManyTimes2", value:usageCount}))
      dispatch(SurveyAction.currentProductCount(3))
      }
    }
    else if(currentProduct === 3) {
      dispatch(SurveyAction.submitQuestion({key:"howManyTimes3", value:usageCount}))
      dispatch(SurveyAction.stepCount(8))
    }
    
  };

  return (

    <div className="myContainer">
      <form onSubmit={handleSubmit}>
    <div className='childContainer-1'>
        <h1 className="question"> How many times you used {name} since you received it ?</h1>
        <div className='inputContainer'>
            <input
                id='name'
                type="text"
                name="name"
                value={usageCount}
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

export default HowManyTimesI
