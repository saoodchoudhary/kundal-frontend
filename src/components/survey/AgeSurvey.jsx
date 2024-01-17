import React, {  } from 'react'
import { useDispatch } from 'react-redux'
import { SurveyAction } from '../../store/surveySlice';

const AgeSurvey = () => {
    const dispatch = useDispatch();

    const handleNext = (age)=>{
        dispatch(SurveyAction.submitForm({key:"age",value:age}))
        dispatch(SurveyAction.stepCount(4))
    }


  return (
    <div className="myContainer">
    <div className='childContainer-1'>
        <h1 className="question">What is Your Age ?</h1>
       
         <div className='btnImgContainer'>
          <div className='imgBtn'  onClick={() => handleNext("Below 18")} >
            <img src='./survey/below15.png' alt='below 18'/>
            <button>Below 18</button>
          </div>
          <div className='imgBtn' onClick={() => handleNext("18 - 29")}>
            <img src='./survey/eighteentotwentynine.png' alt='18 - 29'/>
            <button>18 - 29</button>
          </div>
          <div className='imgBtn' onClick={() => handleNext("30 - 39")}>
            <img src='./survey/thirtytothirtynine.png' alt='30 - 39'/>
            <button>30 - 39</button>
          </div>
          <div className='imgBtn' onClick={() => handleNext("40 - 49")}>
            <img src='./survey/fourtytofourtynine.png' alt='40 - 49'/>
            <button>40 - 49</button>
          </div>
          <div className='imgBtn' onClick={() => handleNext("50plus")}>
            <img src='./survey/fiftyplus.png' alt='50 plus'/>
            <button>50 Above</button>
          </div>
        </div>
    </div>
    
</div>
  )
}

export default AgeSurvey
