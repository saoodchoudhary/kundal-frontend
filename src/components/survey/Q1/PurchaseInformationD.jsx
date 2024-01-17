// PurchaseLocationSurvey.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';
import "../../../style/survey.css"
const PurchaseInformationD = () => {
  const dispatch = useDispatch();

  
  const { currentProduct} = useSelector(state => state.survey);
  const [name, setName] = useState()
  const [toggleName, setToggleName] = useState('')

  const handleChange = (e)=>{
    setName(e.target.value)

  }
 
   const handleNext = (e)=>{
    e.preventDefault();
    if(currentProduct ===1){
      dispatch(SurveyAction.submitQuestion({key:"purchaseInformation1",value:toggleName+ " - " +name}))
      dispatch(SurveyAction.questionCount1(6));
    }
    else if(currentProduct === 2){
      dispatch(SurveyAction.submitQuestion({key:"purchaseInformation2",value:toggleName+ " - " +name}))
      dispatch(SurveyAction.questionCount2(6));
    }
    else if(currentProduct === 3) {
      dispatch(SurveyAction.submitQuestion({key:"purchaseInformation3",value:toggleName+ " - " +name}))
      dispatch(SurveyAction.questionCount3(6));
    }
   }

  return (

    <div className="myContainer">
      <form onSubmit={handleNext}>
      <div className='childContainer-1'>
        <h1 className="question">Where did you purchase it?</h1>

<div className='btnImgContainer'>
          <div className='imgBtn'  onClick={() => setToggleName("Online")} >
            <img src='./survey/online.jpg' alt='Online'/>
            <button>Online</button>
          </div>
          <div className='imgBtn' onClick={() => setToggleName("Offline")}>
            <img src='./survey/offline.jpg' alt='Offline'/>
            <button>Offline</button>
          </div>
        </div>
        {toggleName !== "" &&    <div className='text-md font-semibold text-center mt-3'>You Selected {toggleName}</div>}
      {toggleName !== "" &&   <div className='text-center mt-2 pb-11'>
                    <input
                        id='name'
                        type="text"
                        name="name"
                        placeholder='Name'
                        onChange={handleChange}
                        className="p-3 text-lg rounded-lg"
                        required
                    />
                </div> }
      </div>
    {toggleName !== "" &&  <button
        type='submit'
        className="myBtn bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 focus:outline-none"
    >
        Next Step
    </button>
    }</form>
    </div>

  );
};


export default PurchaseInformationD
