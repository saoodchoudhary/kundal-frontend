import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SurveyAction } from '../../store/surveySlice';

const AgeSurvey = () => {
    const dispatch = useDispatch();
    const [age, setAge] = useState()
    const handleOnChange = (e)=>{
        const { value} = e.target;
        setAge(value)
    }

    const handleNext = ()=>{
        dispatch(SurveyAction.submitForm({key:"age",value:age}))
        dispatch(SurveyAction.stepCount(4))
    }


  return (
    <div className="myContainer">
    <div className='childContainer-1'>
        <h1 className="question">What is Your Age ?</h1>
        <div className='inputContainer'>
            <input
                id='age'
                type="text"
                name="age"
                placeholder='Age'
                onChange={handleOnChange}
                className="input"
            />
        </div>
    </div>
    <button
        onClick={handleNext}
        className="myBtn bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 focus:outline-none"
    >
        Next Step
    </button>
</div>
  )
}

export default AgeSurvey
